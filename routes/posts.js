const express =require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get("/", async (req, res) => {
  console.log(" GET : IN POSTS NOW - - - ")
  try{
    const post = await Post.find()
  }catch(err){
    res.json({ message: error })
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  post.save()
    .then(data=> {
      res.json(data)})
    .catch(err => {
      res.json({message:err})
    })
})

module.exports=router
