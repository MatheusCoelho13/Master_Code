const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "sua_senha",
  host: "localhost",
  port: 5432,
  database: "sua_database",
});

module.exports = pool;
