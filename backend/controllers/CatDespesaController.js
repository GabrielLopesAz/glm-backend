const knex = require("../database/connection")
const Categoria = require("../models/CatDespesa")


class catDespesaController{

  async index(req,res){
    var cat = await Categoria.findAll()
    console.log(cat)
    res.json(cat)
  }

  async indexOne(req,res){
    var id = req.params.id;
    var catOne = await Categoria.findById(id)
    if (catOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(catOne)
    }
  }

  async create(req,res){
    var{NOME,DESCRICAO} = req.body;
    // console.log("Controler: ", NOME,DESCRICAO)
    if(NOME != undefined || DESCRICAO != undefined){
      await Categoria.create(NOME,DESCRICAO)
      res.status(200).send("Dados inserido com sucesso")
    }else{
      res.status(400).json({err:"Undefined informations"})
    }

  }

  async update(req,res){

    var {ID,NOME,DESCRICAO} = req.body;

    if(ID != undefined && ID > 0){

      var result = await Categoria.update(ID,NOME,DESCRICAO)
      
      if(result.status){
        res.status(200).send("Dados atualizados com sucesso")
      }else{
        res.status(406).send(result.err)
      }
      
    }else{
      res.status(406).send("ID INVALIDO")
    }

  }

  async delete(req,res){
    var ID= req.body.ID;
    console.log("Controller: ", ID)

     var result = await Categoria.delete(ID)
       
     if(result.stats){
          res.status(200).send("Dados excluidos com sucesso")
        }else{
          res.status(406).send(result.err)
        }
   
  }

}//fim da classe

module.exports = new catDespesaController()