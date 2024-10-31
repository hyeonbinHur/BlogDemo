const express = require("express");
const router = express.Router();
const api = require("../handler/post_api.js");

router.get("/post", api.get_posts); //read all posts with titles
router.get("/post/:id", api.get_post); // read a specific post
router.post("/post", api.create_post); // create new post
router.put("/post/:id", api.update_post); // update post
router.delete("/post/:id", api.delete_post); // delete post

module.exports = router;
