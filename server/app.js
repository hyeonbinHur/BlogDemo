const express = require("express"); // import and assign express framework
const mysql = require("mysql2");
const apis = require("./handler/api.js");
const db_info = {
  host: "database-1.c9mcyqkkco2j.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "blogpasswordjhhshb",
  database: "blogdemo", // database 이름을 문자열로 입력
};

const connection = mysql.createConnection(db_info);

const app = express();
const port = 3000;
const router = express.Router();

// 기본 경로
app.get("/", (req, res) => {
  res.send("Hello world");
});

// /test/api 경로로 요청 시 라우터 사용
app.use("/test/api", router);

// Read all records from the 'test' table
router.get("/tests", apis.testApi);

app.listen(port, () => {
  // run the server on assigned port
  console.log(`Example app is listening on port ${port}`);
});
