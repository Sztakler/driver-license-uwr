const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

app.use(cors());
app.use(express.json());

const exampleData = [
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to A",
		odpowiedzi: ["a", "b", "c"],
		poprawna_odpowiedz: 0,
		media: "/src/assets/images/test.jpg",
		liczba_punktow: 2,
		zakres_struktury: "SPECJALISTYCZNY",
	},
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to B",
		odpowiedzi: ["TAK", "NIE"],
		poprawna_odpowiedz: 1,
		media: "/src/assets/images/test.jpg",
		liczba_punktow: 3,
		zakres_struktury: "PODSTAWOWY",
	},
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to B",
		odpowiedzi: ["TAK", "NIE"],
		poprawna_odpowiedz: 1,
		media: "/src/assets/images/test.jpg",
		liczba_punktow: 2,
		zakres_struktury: "PODSTAWOWY",
	},
	{
		pytanie: "Pytanie 1, Poprawna odpowiedz tutaj to C",
		odpowiedzi: ["a", "b", "c"],
		poprawna_odpowiedz: 2,
		media: "/src/assets/images/test.jpg",
		liczba_punktow: 3,
		zakres_struktury: "SPECJALISTYCZNY",
	},
];

app.get("/", (req, res) => {
	console.log("get");
	res.json({ test: "test" });
});

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
