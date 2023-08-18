const Pool = require("pg").Pool;
require("dotenv").config();

const PGHOST = "ep-white-frog-578801-pooler.eu-central-1.aws.neon.tech";
const PGDATABASE = "neondb";
const PGUSER = "supreme229";
const PGPASSWORD = "Vlmqs9RO5rGI";

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
