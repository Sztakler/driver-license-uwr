const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./DatabaseConfiguration/database");
const passport = require("passport");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const routes = require("./routes");

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

const emailExists = async (email) => {
	const data = await pool.query("SELECT * FROM users WHERE email=$1", [email]);

	if (data.rowCount === 0) return null;
	return data.rows[0];
};

const userExists = async (id) => {
	const data = await pool.query("SELECT * FROM users WHERE id=$1", [id]);

	if (data.rowCount == 0) return false;
	return data.rows[0];
};

const initializePassport = require("./PassportConfiguration/passport-config");
initializePassport(passport, emailExists, userExists);

app.use("", routes);

app.listen(5000, () => {
	console.log("SERVER STARTED PORT:5000");
});

module.exports = app;
