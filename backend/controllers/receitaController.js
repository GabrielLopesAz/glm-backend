const knex = require("../database/connection")
const Receita = require("../models/Receita")
 
class receitaController{

  async index(req,res){
    var receita = await Receita.findAll()
    res.json(receita)
  }

  async indexOne(req,res){
    var id = req.params.id;
    var desOne = await Receita.findById(id)
    if (desOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(desOne)
    }
  }

  async create(req,res){
    var{NOMERECEITA,DESCRICAORECEITA,DATARECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTA,FK_CATDES} = req.body;
    console.log(NOMERECEITA,DATARECEITA,DESCRICAORECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTA,FK_CATDES)

    if(NOMERECEITA != undefined || DESCRICAORECEITA != undefined || VALORRECEITA < 0 || RECORRENCIARECEITA < 0  || FK_CONTA < 0 || FK_CATDES < 0){
       await Receita.create(NOMERECEITA,DESCRICAORECEITA,DATARECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTA,FK_CATDES)
      res.render("../views/home")
      res.status(200).json({msg:"Dados inserido com sucesso"})
     
    }else{
      res.status(400).json({err:"Undefined informations"})
    } 

  }

  async update(req,res){

    var {IDRECEITA,NOMERECEITA,DESCRICAORECEITA,DATARECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTA,FK_CATDES} = req.body;

    if(IDRECEITA != undefined && IDRECEITA > 0){

      var result = await Receita.update(IDRECEITA,NOMERECEITA,DESCRICAORECEITA,DATARECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTA,FK_CATDES)
      
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
    var ID= req.body.IDRECEITA;
    console.log("Controller: ", ID)

     var result = await Receita.delete(ID)
       
     if(result.stats){
          res.status(200).send("Dados excluidos com sucesso")
        }else{
          res.status(406).send(result.err)
        }
   
  }

}//fim da classe

module.exports = new receitaController()