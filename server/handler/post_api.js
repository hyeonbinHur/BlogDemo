const connection = require("./dp_info");

const get_posts = (req, res) => {
  connection.query("SELECT title FROM post", (err, results) => {
    if (err) {
      res.status(500).send("Fail data");
    } else {
      res.json(results);
    }
  });
};

const get_post = (req, res) => {
  const post_uuid = req.params.id;
  const query = "SELECT * FROM post WHERE post_uuid = ?";
  const values = [post_uuid];
  connection.query(query, values, (err, results) => {
    if (err) {
      res.status(500).send("Fail data");
    } else {
      res.json(results);
    }
  });
};

const create_post = (req, res) => {
  const { title, body } = req.body;
  const query = "INSERT INTO post (title, body) VALUES (?, ?)";
  const values = [title, body];
  connection.query(query, values, (err, results) => {
    if (err) {
      res.status(500).send("Failed to insert data");
    } else {
      res.status(201).json({ title, body });
    }
  });
};

const update_post = (req, res) => {
  const post_uuid = req.params.id;
  const { title, body } = req.body;
  const query = "UPDATE post SET title = ?, body = ? WHERE post_uuid = ?";
  const values = [title, body, post_uuid];
  connection.query(query, values, (err, results) => {
    if (err) {
      res.status(500).send("Failed to update data");
    } else {
      res.status(201).json({ post_uuid, title, body });
    }
  });
};

const delete_post = (req, res) => {
  const post_uuid = req.params.id;
  const query = "DELETE FROM post WHERE post_uuid = ?";
  const value = [post_uuid];
  connection.query(query, value, (err, results) => {
    if (err) {
      res.status(500).send("Faild to delete data");
    } else {
      res.status(201).json({ results });
    }
  });
};

module.exports = { get_posts, get_post, create_post, delete_post, update_post };
