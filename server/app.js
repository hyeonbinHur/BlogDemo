const express = require("express"); // import and assign express framework
const app = express();
const port = 3000;

// routing
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  // run the server on assigned port
  console.log(`Example app is listening on port ${port}`);
});
