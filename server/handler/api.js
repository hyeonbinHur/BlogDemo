const mysql = require("mysql2");
require("dotenv").config();
const db_info = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: process.env.DB_CHARSET,
};

const connection = mysql.createConnection(db_info);
const testApi = (req, res) => {
  connection.query("SELECT * FROM test", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to retrieve data");
    } else {
      res.json(results);
    }
  });
};

module.exports = { testApi, connection };
