const knex = require("../database/connection")
const Meta = require("../models/Meta")


class metaController{

  async index(req,res){
    var meta = await Meta.findAll()
    res.json(meta)
  }

  async indexOne(req,res){
    var id = req.params.id;
    var metOne = await Meta.findById(id)
    if (metOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(metOne)
    }
  }

  async create(req,res){
    var{NOMEMETA,GASTOMETA,GATUALMETA,MESMETA,FK_CATDES} = req.body;
    console.log(NOMEMETA,GASTOMETA,MESMETA,FK_CATDES)

    if(NOMEMETA != undefined || GASTOMETA != undefined || GATUALMETA != undefined || MESMETA < 0){
      await Meta.create(NOMEMETA,GASTOMETA,GATUALMETA,MESMETA,FK_CATDES)
      res.status(200).send("Dados inserIDMETAo com sucesso")
    }else{
      res.status(400).json({err:"Undefined informations"})
    }

  }

  async update(req,res){

    var {IDMETA,NOMEMETA,GASTOMETA,GATUALMETA,MESMETA,FK_CATDES} = req.body;

    if(IDMETA != undefined && IDMETA > 0){

      var result = await Meta.update(IDMETA,NOMEMETA,GASTOMETA,GATUALMETA,MESMETA,FK_CATDES)
      
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
    var ID= req.body.IDMETA;
    console.log("Controller: ", ID)

     var result = await Meta.delete(ID)
       
     if(result.stats){
          res.status(200).send("Dados excluidos com sucesso")
        }else{
          res.status(406).send(result.err)
        }
   
  }

}//fim da classe

module.exports = new metaController()