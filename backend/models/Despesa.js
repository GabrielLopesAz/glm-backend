const knex = require("../database/connection")

class Despesa{

  async findAll(){

    try{
     var result= await knex.select(["NOMEDESPESA","DESCRICAODESPESA","DATADESPESA","VALORDESPESA","RECORRENCIADESPESA","FK_CONTA","FK_CATDES"]).table("despesa")
      return result
    }catch(err){
      console.log(err)
    }
  }

  async findById(id){
    console.log("Model: ", id)
    try{
     var result = await knex.select(["NOMEDESPESA","DESCRICAODESPESA","DATADESPESA","VALORDESPESA","RECORRENCIADESPESA","FK_CONTA","FK_CATDES"]).where({IDDESPESA:id}).table("despesa")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByDespesa(NOMEDESPESA){

    try{
     var result = await knex.select(["NOMEDESPESA","DESCRICAODESPESA","DATADESPESA","VALORDESPESA","RECORRENCIADESPESA","FK_CONTA","FK_CATDES"]).where({NOMEDESPESA:NOMEDESPESA}).table("despesa")
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(NOMEDESPESA,DESCRICAODESPESA,DATADESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES){
    // console.log("Model: ", NOME, DESCRICAO)
    try{
     await knex.insert({NOMEDESPESA:NOMEDESPESA,DESCRICAODESPESA:DESCRICAODESPESA,DATADESPESA:DATADESPESA,VALORDESPESA:VALORDESPESA,RECORRENCIADESPESA:RECORRENCIADESPESA,FK_CONTA:FK_CONTA,FK_CATDES:FK_CATDES}).table("despesa")
      // .raw(`insert into despesa(IDDESPESA,NOMEDESPESA,DESCRICAODESPESA,DATADESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES) VALUES(NULL,'${NOMEDESPESA}','${DESCRICAODESPESA}','${DATADESPESA}',${VALORDESPESA},${RECORRENCIADESPESA},${FK_CONTA},${FK_CATDES})`)
      
    }catch(err){
      console.log(err)
    }

  }

  async update(IDDESPESA,NOMEDESPESA,DESCRICAODESPESA,DATADESPESA,VALORDESPESA,RECORRENCIADESPESA,FK_CONTA,FK_CATDES){

    var id = await this.findById(IDDESPESA)

    if(id != undefined){
      var edit = {};

      if(NOMEDESPESA != undefined){
        if(NOMEDESPESA != Despesa.NOMEDESPESA){
          var result = await this.findByDespesa(NOMEDESPESA)
            if(result == false){
              edit.NOMEDESPESA = NOMEDESPESA
            }else{
              return{status: false, err:"Despesa ja cadastrada"}
            }
        }
      }
      if(DESCRICAODESPESA != undefined){
        edit.DESCRICAODESPESA = DESCRICAODESPESA
      }
      if(VALORDESPESA != undefined){
        edit.VALORDESPESA = VALORDESPESA
      }   
       if(DATADESPESA != undefined){
        edit.DATADESPESA = DATADESPESA
      }
      if(RECORRENCIADESPESA != undefined){
        edit.RECORRENCIADESPESA = RECORRENCIADESPESA
      }
      if(FK_CONTA != undefined){
        let id = await this.findById(FK_CATDES)
        
        if(id != undefined){
        edit.FK_CONTA = FK_CONTA
      }
    }
      if(FK_CATDES != undefined){
        
        let id = await this.findById(FK_CATDES)
        
        if(id != undefined){
        edit.FK_CATDES = FK_CATDES
      }

    }

      try{
        await  knex.update(edit).where({IDDESPESA:IDDESPESA}).table("despesa")
        return {status:true}
      }catch(err){
        return {status:false,err:err}
      }

    }else{
      return { status: false, err: "A Despesa não existe!" }
    }

  }

  async delete(IDDESPESA){

    console.log("Model: ", IDDESPESA)
    var idIsTrue = await this.findById(IDDESPESA)
    console.log(idIsTrue)
    if(idIsTrue != undefined){
      try{
        await knex.delete().where({IDDESPESA:IDDESPESA}).table("despesa")
        return {stats: true}
      }catch(err){
        return {stats:false, err:err}
      }
    }


  }

}

module.exports = new Despesa();