const express = require("express"); // import and assign express framework
const cors = require("cors");
const apis = require("./handler/api.js");
const postRouter = require("./routers/post.js");
const app = express();
const port = 3000;
const router = express.Router();

//temp
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const db_info = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(db_info);

app.use(express.json()); //json data를 사용할 수 있게 해줌
app.use(cors()); // cors 기본처리
app.use("/test/api", postRouter); // poster api
app.use("/test/api", router); // 테스트용 api이므로 추후에 삭제

router.get("/tests", apis.testApi);
//
router.post("/user/sign-up", (req, res) => {
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

router.post("/user/sign-in", (req, res) => {
  const { id, pw } = req.body;
  const query = "SELECT * FROM Users WHERE id = ?";
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "서버 오류" });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: "존재하지 않는 ID" });
    }
    const user = results[0]; // 유저 정보 가져옴
    // 비밀번호 체크
    bcrypt.compare(pw, user.pw, (err, isMatch) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "서버 오류" });
      }
      if (!isMatch) {
        return res.status(401).json({ message: "잘못된 비밀번호" });
      }
      // 로그인 성공
      return res.status(200).json({ message: "로그인 성공" });
    });
  });
});

app.listen(port, () => {
  // run the server on assigned port
  console.log(`Example app is listening on port ${port}`);
});
