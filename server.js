// server.js

const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

app.get("/", (req, res) => {
    res.send("Hello world");
});

// 서버 시작
app.listen(port, () => {
    console.log(`Example app is listening on port ${port}`);
});
