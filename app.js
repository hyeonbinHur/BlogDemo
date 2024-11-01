const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2"); 
require("dotenv").config(); 

app.use(express.json());

const router = express.Router();
const registrationRouter = require("./registration/router");
const loginRouter = require("./login/router");

app.use("/registration", registrationRouter);
app.use("/login", loginRouter);

// MySQL 연결 설정
const db_info = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: process.env.DB_CHARSET,
};

const connection = mysql.createConnection(db_info);

//테스트용
const testApi = (req, res) => {
    res.json({ message: "테스트 API" });
};

router.get("/tests", testApi);

app.use("/test/api", router); 

app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
