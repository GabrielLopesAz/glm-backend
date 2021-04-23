const express = require('express');
const app = express()

app.get("/", function(req,res){
  res.send("welcome to my page")
})
app.listen(8888,()=>{
  console.log("API ON")
})