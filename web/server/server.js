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

app.get("/api/practice", async (req, res) => {
	try {
		const allTasks = await pool.query("SELECT * FROM zadania;");
		res.json(allTasks.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
