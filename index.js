const express = require("express");
const app = express();
const pool = require("./backend/db");
const cors = require("cors");
const PORT = 8080;

app.use(express.json()); //  req.body
app.use(cors());

app.post("/todos", (req, res) => {
  try {
    const { nome, sobrenome,email } = req.body;

    pool.query("INSERT INTO userss (nome, sobrenome, email) VALUES ($1, $2, $3)", [nome, sobrenome, email]);

    return res.status(201).json("A user was created");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
