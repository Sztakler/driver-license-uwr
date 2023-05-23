const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "drliuw23",
	host: "localhost",
	port: 5432,
	database: "driver_license_uwr",
});

module.exports = pool;
