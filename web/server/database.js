const Pool = require("pg").Pool;
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=endpoint%3D${ENDPOINT_ID}`;

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
