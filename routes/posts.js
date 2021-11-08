const express = require("express")
const router  = express.Router()
const Post    = require("../models/Post")

//GET METHODS
router.get("/", async (req, res) => {
  console.log(" GET : IN POSTS NOW - - - ")
  try {
    const post = await Post.find()
    res.json(post)
  } catch (err) {
    res.json({ message: error })
  }
});

//host:port/posts/postId will return the json object with id
router.get("/:postId", async (req, res) => {
  console.log(`GET : IN POSTS id ${req.params.postId} NOW - - - `);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: error });
  }
});

//POST METHOD
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
});

//DELETE METHOD
router.delete("/:postId", async (req, res) => {
  console.log(`DELETE : IN POSTS id ${req.params.postId} NOW - - - `);
  try {
    const removedPost = await Post.deleteOne({ _id: req.params.postId });
    res.json(removedPost)
  } catch (err) {
    res.json({ message: err })
  }
});

//PATCH METHOD
router.patch("/:postId", async (req, res) => {
  console.log(`PATCH : IN POSTS id ${req.params.postId} NOW - - - `);
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
