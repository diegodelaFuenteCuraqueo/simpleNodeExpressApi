const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get("/", (req, res)=>{
  try{
    const user = await User.find()
  }catch(err){
    res.json({message:error})
  }
})