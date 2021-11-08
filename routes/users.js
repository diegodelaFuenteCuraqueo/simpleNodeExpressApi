const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get("/", async (req, res)=>{
  try{
    const user = await User.find()
    res.json(user)
  }catch(err){
    res.json({message:err})
  }
})

//TODO implement methods for this collection