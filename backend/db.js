const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "matheus13",
  host: "localhost",
  port: 5432,
  database: "cadastro",
});

module.exports = pool;