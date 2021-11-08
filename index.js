const express =require('express') 
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

//bp handles data
app.use(bodyParser.json())

//Import routes 
const postsRoute = require('./routes/posts')
app.use("/posts", postsRoute)

//routes
app.get('/', (req, res) => {
  console.log(" GET : IN HOME NOW - - - ")
  res.send("home")
})

mongoose.connect("mongodb://localhost:27017/dbTest1", ()=> console.log("Connected to DB"))

app.listen(8000)
