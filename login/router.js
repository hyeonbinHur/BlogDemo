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

// 로그인 처리
router.post("/", (req, res) => {
    const { id, pw } = req.body;

    const query = 'SELECT * FROM Users WHERE id = ?';
    connection.query(query, [id], (error, results) => {
        if (error) { 
            console.error(error); 
            return res.status(500).json({ message: '서버 오류' }); 
        }

        if (results.length === 0) { 
            return res.status(401).json({ message: '존재하지 않는 ID' }); 
        } 
        
        const user = results[0]; // 유저 정보 가져옴

        // 비밀번호 체크
        bcrypt.compare(pw, user.pw, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: '서버 오류' });
            }
            if (!isMatch) {
                return res.status(401).json({ message: '잘못된 비밀번호' });
            }
            // 로그인 성공
            return res.status(200).json({ message: "로그인 성공" });
        });
    });
});

module.exports = router;