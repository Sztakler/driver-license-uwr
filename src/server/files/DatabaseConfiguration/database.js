const Pool = require("pg").Pool;

const PGHOST = "";
const PGDATABASE = "";
const PGUSER = "";
const PGPASSWORD = "";

const pool = new Pool({
	user: PGUSER,
	password: PGPASSWORD,
	host: PGHOST,
	port: 5432,
	database: PGDATABASE,
	ssl: {
		rejectUnauthorized: false,
	},
});

module.exports = pool;
