const express = require('express')
const app = express()



class ContaController{

  async index(req,res){
    res.send("DFOJASNFODS")
  }
}
module.exports  = new ContaController();