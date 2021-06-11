const knex = require("../database/connection")

class Receita{

  async findAll(){

    try{
     var result= await knex.select(["NOMERECEITA","DESCRICAORECEITA","DATARECEITA","VALORRECEITA","RECORRENCIARECEITA","FK_CONTAREC","FK_CATREC"]).table("receita")
      return result
    }catch(err){
      console.log(err)
    }
  }

  async findById(id){
    console.log("Model: ", id)
    try{
     var result = await knex.select(["NOMERECEITA","DESCRICAORECEITA","DATARECEITA","VALORRECEITA","RECORRENCIARECEITA","FK_CONTAREC","FK_CATREC"]).where({IDRECEITA:id}).table("receita")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByReceita(NOMERECEITA){

    try{
     var result = await knex.select(["NOMERECEITA","DESCRICAORECEITA","DATARECEITA","VALORRECEITA","RECORRENCIARECEITA","FK_CONTAREC","FK_CATREC"]).where({NOMERECEITA:NOMERECEITA}).table("receita")
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(NOMERECEITA,DESCRICAORECEITA,DATARECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTAREC,FK_CATREC){
    // console.log("Model: ", NOME, DESCRICAO)
    try{
   await knex.insert({NOMERECEITA:NOMERECEITA,DESCRICAORECEITA:DESCRICAORECEITA,DATARECEITA:DATARECEITA,VALORRECEITA:VALORRECEITA,RECORRENCIARECEITA:RECORRENCIARECEITA,FK_CONTAREC:FK_CONTAREC,FK_CATREC:FK_CATREC}).table("receita")
      // .raw(`insert into receita(IDRECEITA,NOMERECEITA,DESCRICAORECEITA,DATARECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTAREC,FK_CATREC) VALUES(NULL,'${NOMERECEITA}','${DESCRICAORECEITA}','${DATARECEITA}',${VALORRECEITA},${RECORRENCIARECEITA},${FK_CONTAREC},${FK_CATREC})`)
      
    }catch(err){
      console.log(err)
    }

  }

  async update(IDRECEITA,NOMERECEITA,DESCRICAORECEITA,DATARECEITA,VALORRECEITA,RECORRENCIARECEITA,FK_CONTAREC,FK_CATREC){

    var id = await this.findById(IDRECEITA)

    if(id != undefined){
      var edit = {};

      if(NOMERECEITA != undefined){
        if(NOMERECEITA != Receita.NOMERECEITA){
          var result = await this.findByReceita(NOMERECEITA)
            if(result == false){
              edit.NOMERECEITA = NOMERECEITA
            }else{
              return{status: false, err:"Receita ja cadastrada"}
            }
        }
      }
      if(DESCRICAORECEITA != undefined){
        edit.DESCRICAORECEITA = DESCRICAORECEITA
      }
      if(VALORRECEITA != undefined){
        edit.VALORRECEITA = VALORRECEITA
      }   
       if(DATARECEITA != undefined){
        edit.DATARECEITA = DATARECEITA
      }
      if(RECORRENCIARECEITA != undefined){
        edit.RECORRENCIARECEITA = RECORRENCIARECEITA
      }
      if(FK_CONTAREC != undefined){
        let id = await this.findById(FK_CATREC)
        
        if(id != undefined){
        edit.FK_CONTAREC = FK_CONTAREC
      }
    }
      if(FK_CATREC != undefined){
        
        let id = await this.findById(FK_CATREC)
        
        if(id != undefined){
        edit.FK_CATREC = FK_CATREC
      }

    }

      try{
        await  knex.update(edit).where({IDRECEITA:IDRECEITA}).table("receita")
        return {status:true}
      }catch(err){
        return {status:false,err:err}
      }

    }else{
      return { status: false, err: "A Receita não existe!" }
    }

  }

  async delete(IDRECEITA){

    console.log("Model: ", IDRECEITA)
    var idIsTrue = await this.findById(IDRECEITA)
    console.log(idIsTrue)
    if(idIsTrue != undefined){
      try{
        await knex.delete().where({IDRECEITA:IDRECEITA}).table("receita")
        return {stats: true}
      }catch(err){
        return {stats:false, err:err}
      }
    }


  }

}

module.exports = new Receita();