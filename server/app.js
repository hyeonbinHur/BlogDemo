const express = require("express"); // import and assign express framework

const apis = require("./handler/api.js");

const app = express();
const port = 3000;
const router = express.Router();

// 기본 경로
app.get("/", (req, res) => {
  res.send("Hello world");
});
// /test/api 경로로 요청 시 라우터 사용
app.use("/test/api", router);

router.get("/tests", apis.testApi);

app.listen(port, () => {
  // run the server on assigned port
  console.log(`Example app is listening on port ${port}`);
});
