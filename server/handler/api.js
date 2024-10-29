const mysql = require("mysql2");

const db_info = {
  host: "database-1.c9mcyqkkco2j.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "blogpasswordjhhshb",
  database: "blogdemo",
  charset: "utf8mb4", // 인코딩 설정 추가
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
