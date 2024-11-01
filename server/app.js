const express = require("express"); // import and assign express framework
const cors = require("cors");
const postRouter = require("./routers/post.js");
const commentRouter = require("./routers/comment.js");
const userRouter = require("./routers/user.js");
const app = express();
const port = 3000;

app.use(express.json()); //json data를 사용할 수 있게 해줌
app.use(cors()); // cors 기본처리
app.use("/test/api", postRouter, commentRouter, userRouter); // poster api

app.listen(port, () => {
  // run the server on assigned port
  console.log(`Example app is listening on port ${port}`);
});
