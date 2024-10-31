const express = require("express"); // import and assign express framework
const cors = require("cors");
const apis = require("./handler/api.js");
const postRouter = require("./routers/post.js");

const app = express();
const port = 3000;
const router = express.Router();

app.use(express.json()); //json data를 사용할 수 있게 해줌
app.use(cors()); // cors 기본처리
app.use("/test/api", postRouter); // poster api
app.use("/test/api", router); // 테스트용 api이므로 추후에 삭제

router.get("/tests", apis.testApi);

app.listen(port, () => {
  // run the server on assigned port
  console.log(`Example app is listening on port ${port}`);
});
