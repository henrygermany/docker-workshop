// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");
const dotenv = require("dotenv");

const app = express();
const port = process.env.SERVER_PORT;

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.use(cors());
app.use(bodyParser.json());


app.get("/todos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todos");
    console.log("Queried all todos");
    res.json(result.rows);

  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { text, id } = req.body;
    const result = await pool.query("UPDATE todos SET text = $1 WHERE id = $2 RETURNING *", [text, id]);
    console.log(`Updated todo with ID ${id} to new text ${text}`);
    const response = result.rows[0];
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todoText = req.body.text;
    const result = await pool.query("INSERT INTO todos (text) VALUES ($1) RETURNING *", [todoText]);
    console.log(`Created todo with text ${todoText}`);

    const response = result.rows[0];
    console.log(response);
    res.json(response);

  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query("DELETE FROM todos WHERE id = $1", [id]);
    console.log(`Deleted todo with id ${id}`);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
