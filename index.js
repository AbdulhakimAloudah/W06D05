const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/db.js");

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
