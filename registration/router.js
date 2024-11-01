const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
require("dotenv").config();

const db_info = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(db_info);

// 회원가입 처리
router.post("/", (req, res) => {
    const { id, pw, name } = req.body;

    bcrypt.hash(pw, 10, (err, hash) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "서버 오류가 발생하였습니다." });
        }

        const query = "INSERT INTO Users (id, pw, name) VALUES (?, ?, ?)";
        connection.query(query, [id, hash, name], (err, results) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: "중복된 ID입니다." });
                }
                return res.status(500).json({ message: "서버 오류가 발생하였습니다." });
            }

            return res.status(201).json({ message: "회원가입 성공" });
        });
    });
});

module.exports = router;