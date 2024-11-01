const connection = require("./dp_info");

const testApi = (req, res) => {
  connection.query("SELECT * FROM test", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Failed to retrieve data");
    } else {
      res.json(results);
    }
  });
};

module.exports = { testApi, connection };
