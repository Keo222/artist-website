const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "k168127",
  host: "localhost",
  port: 5432,
  database: "frankie_art",
});

module.exports = pool;
