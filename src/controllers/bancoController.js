class bancoController{

  async create (req,res){
    console.log(req.body);
    res.send("Pegando corpo da requisição")
  }
}

module.exports = new bancoController();