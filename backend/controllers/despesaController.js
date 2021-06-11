const knex = require("../database/connection")
const Despesa = require("../models/Despesa")


class despesaController{

  async index(req,res){
    var despesa = await Despesa.findAll()
    res.json(despesa)
  }

  async indexOne(req,res){
    var id = req.params.id;
    var desOne = await Despesa.findById(id)
    if (desOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(desOne)
    }
  }

  async create(req,res){
    var{NOMEDESPESA,DESCRICAODESPESA,DATADESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES} = req.body;
    console.log(NOMEDESPESA,DATADESPESA,DESCRICAODESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES)

    if(NOMEDESPESA != undefined || DESCRICAODESPESA != undefined || VALORDESPESA < 0 || RECORRENCIADESPESA < 0  || FK_CONTA < 0 || FK_CATDES < 0){
      await Despesa.create(NOMEDESPESA,DESCRICAODESPESA,DATADESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES)
      res.status(200).send("Dados inserido com sucesso")
    }else{
      res.status(400).json({err:"Undefined informations"})
    } 

  }

  async update(req,res){

    var {IDDESPESA,NOMEDESPESA,DESCRICAODESPESA,DATADESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES} = req.body;

    if(IDDESPESA != undefined && IDDESPESA > 0){

      var result = await Despesa.update(IDDESPESA,NOMEDESPESA,DESCRICAODESPESA,DATADESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES)
      
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
    var ID= req.body.IDDESPESA;
    console.log("Controller: ", ID)

     var result = await Despesa.delete(ID)
       
     if(result.stats){
          res.status(200).send("Dados excluidos com sucesso")
        }else{
          res.status(406).send(result.err)
        }
   
  }

}//fim da classe

module.exports = new despesaController()