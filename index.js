const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const PORT = 8080;

app.use(express.json()); //  req.body
app.use(cors());

app.post("/validacao", (req, res) => {
  try {
    const { name, email } = req.body;

    pool.query("INSERT INTO users1 (name, email) VALUES ($1, $2)", [name, email]);

    return res.status(201).json("A user was created");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
