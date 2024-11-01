const express = require("express");
const router = express.Router();
const api = require("../handler/comment_api.js");

router.get("/comment/:id", api.get_comments); //read all posts with titles
router.post("/comment", api.create_comment); // create new post
router.put("/comment/:id", api.update_comment); // update post
router.delete("/comment/:id", api.delete_comment); // delete post

module.exports = router;
