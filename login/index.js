//로그인 기능 구현
const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt"); //비번 암호화
require("dotenv").config();
const loginRouter = require(".router");
const app = express();

app.use(express.json());

app.use("/login", loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Login server is running on port ${PORT}`);
});

