const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");
const bcrypt = require("bcrypt");
const passport = require("passport");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:1234",
		credentials: true,
		allowedHeaders: ["Content-Type", "Authorization"], // this is needed for sending JSON
	})
);
app.use(methodOverride());

app.use(
	session({
		secret: "secret_key",
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
			secure: false,
			httpOnly: true,
		},
		store: new pgSession({
			pool: pool,
			tableName: "session",
		}),
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
const users = [];

const emailExists = async (email) => {
	const data = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

	if (data.rowCount == 0) return false;
	return data.rows[0];
};

const userExists = async (id) => {
	const data = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

	if (data.rowCount == 0) return false;
	return data.rows[0];
};

const initializePassport = require("./passport-config");
initializePassport(passport, emailExists, userExists, users);

app.post("/register", async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await pool.query(`
		SELECT * FROM USERS WHERE email = '${email}';
		`);

		if (existingUser.rows.length > 0) {
			return res.status(400).json({ message: "Email already in use" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await pool.query(`
		INSERT INTO USERS (name, email, password)
		VALUES (
			'${name}',
			'${email}',
			'${hashedPassword}'
		);
		`);
		res.status(200).json({ message: "Registration successful" });
	} catch {
		res.status(400).json({ message: "Registration unsuccessful" });
	}
});

app.get("/check-auth", (req, res) => {
	const clientSessionId = req.headers.authorization.split(" ")[1]; // Extract session ID from the request header
	console.log("sesja", clientSessionId);
	if (clientSessionId && clientSessionId === req.sessionID) {
		res.json({ isAuthenticated: true, user: req.session.user });
	} else {
		res.json({ isAuthenticated: false, user: {} });
	}
});

app.post("/login", (req, res, next) =>
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			console.log("ERROR");
			throw err;
		}
		if (!user) {
			console.log("USER NOT FOUND");
			res.status(400).json({ message: "User does not exist!" });
		} else {
			req.logIn(user, (err) => {
				if (err) throw err;
				req.session.user = user;
				console.log("USER AUTHENTICATED");
				res.cookie("sessionIDJs", req.sessionID);
				res.status(200).json(user);
				return;
			});
		}
	})(req, res, next)
);

app.get("/api/practice/", async (req, res) => {
	try {
		const allTasks = await pool.query(
			"SELECT * FROM questions ORDER BY RANDOM() LIMIT 25;"
		);
		res.json(allTasks.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/api/exam/", async (req, res) => {
	try {
		const allTasks = await pool.query(
			`(
				SELECT *
				FROM questions
				WHERE zakres_struktury = 'PODSTAWOWY'
				LIMIT 20
			)
			UNION ALL
			(
				SELECT *
				FROM questions
				WHERE zakres_struktury = 'SPECJALISTYCZNY'
				LIMIT 12
			);`
		);
		res.json(allTasks.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.post("/api/exam/results", async (req, res) => {
	try {
		const { user_id, questions, summary } = req.body;

		const result = await pool.query(`
		insert into results (user_id, questions, summary)
		values (
			${user_id},
			'${JSON.stringify(questions)}',
			'${JSON.stringify(summary)}'
		)
		returning id;
		`);
		console.log("correct insert and response", result.rows[0]);
		res.json({ id: result.rows[0].id });
	} catch (error) {
		console.error(error.message);
	}
});

app.get("/api/exam/results", async (req, res) => {
	try {
		const randomResult = await pool.query(
			"SELECT * FROM results ORDER BY RANDOM() LIMIT 1;"
		);
		console.log(randomResult.rows[0]);
		res.json(randomResult.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.get("/api/exam/results/:id", async (req, res) => {
	const itemId = req.params.id;

	try {
		const randomResult = await pool.query(
			`SELECT * FROM results WHERE id = ${itemId}`
		);
		console.log(randomResult.rows[0]);
		res.json(randomResult.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
