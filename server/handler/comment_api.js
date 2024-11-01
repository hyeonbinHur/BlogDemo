const connection = require("./dp_info");

const get_comments = (req, res) => {
  const post_uuid = req.params.id; // 요청된 post_uuid를 가져옵니다.
  connection.query(
    "SELECT * FROM comment WHERE post_uuid = ?",
    [post_uuid],
    (err, results) => {
      if (err) {
        res.status(500).send("Fail data");
      } else {
        res.json(results);
      }
    }
  );
};

const create_comment = (req, res) => {
  const { content, post_uuid } = req.body;
  const query = "INSERT INTO comment (content, post_uuid) VALUES (?, ?)";
  const values = [content, post_uuid];
  connection.query(query, values, (err, results) => {
    if (err) {
      res.status(500).send("Failed to insert data vV");
    } else {
      res.status(201).json({ content });
    }
  });
};
const update_comment = (req, res) => {
  const comment_uuid = req.params.id;
  const { content } = req.body;
  const query = "UPDATE comment SET content = ? WHERE comment_uuid = ?";
  const values = [content, comment_uuid];
  connection.query(query, values, (err, results) => {
    if (err) {
      res.status(500).send("Failed to update data");
    } else {
      res.status(201).json({ comment_uuid, content });
    }
  });
};
const delete_comment = (req, res) => {
  const comment_uuid = req.params.id;
  const query = "DELETE FROM comment WHERE comment_uuid = ?";
  const value = [comment_uuid];
  connection.query(query, value, (err, results) => {
    if (err) {
      res.status(500).send("Faild to delete data");
    } else {
      res.status(201).json({ results });
    }
  });
};

module.exports = {
  get_comments,
  create_comment,
  update_comment,
  delete_comment,
};
