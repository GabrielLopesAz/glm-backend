const Knex = require("knex")({
  dialect:'mysql',
  client:'mysql'
})
const knex = require("../database/connection")

class Meta{

  async findAll(){

    try{
    var result= await knex.select(["NOMEMETA","GASTOMETA","GATUALMETA","MESMETA","FK_CATDES",Knex.raw("(GASTOMETA - GATUALMETA) as RESTANTE, ((GATUALMETA/GASTOMETA)*100) AS PORC_GASTO")]).table("meta")
      return result
    }catch(err){
      console.log(err)
    }
  }

  async findById(id){
    // console.log("Model: ", id)
    try{
     var result = await knex.select(["NOMEMETA","GASTOMETA","GATUALMETA","MESMETA","FK_CATDES",Knex.raw("(GASTOMETA - GATUALMETA) as RESTANTE, ((GATUALMETA/GASTOMETA)*100) AS PORC_GASTO")]).where({IDMETA:id}).table("meta")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByMeta(NOMEMETA){

    try{
     var result = await knex.select(["NOMEMETA","GASTOMETA","GATUALMETA","MESMETA","FK_CATDES"]).where({NOMEMETA:NOMEMETA}).table("meta")
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(NOMEMETA,GASTOMETA,GATUALMETA,MESMETA,FK_CATDES){
    // console.log("Model: ", NOME, DESCRICAO)
    try{
      await knex.insert({NOMEMETA:NOMEMETA,GASTOMETA:GASTOMETA,GATUALMETA:GATUALMETA,MESMETA:MESMETA,FK_CATDES:FK_CATDES}).table("meta")

    }catch(err){
      console.log(err)
      res.status(406).send(err)
    }

  }

  async update(IDMETA,NOMEMETA,GASTOMETA,GATUALMETA,MESMETA,FK_CATDES){

    var id = await this.findById(IDMETA)

    if(id != undefined){
      var edit = {};

      if(NOMEMETA != undefined){
        if(NOMEMETA != Meta.NOMEMETA){
          var result = await this.findByMeta(NOMEMETA)
            if(result == false){
              edit.NOMEMETA = NOMEMETA
            }else{
              return{status: false, err:"Meta ja cadastrada"}
            }
        }
      }
      if(GASTOMETA != undefined){
        edit.GASTOMETA = GASTOMETA
      }
      if(MESMETA != undefined){
        edit.MESMETA = MESMETA
      }
      if(FK_CATDES != undefined){ 
        edit.FK_CATDES = FK_CATDES
      }
      if(GATUALMETA != undefined){  
        edit.GATUALMETA = GATUALMETA
      }


      try{
        await  knex.update(edit).where({IDMETA:IDMETA}).table("meta")
        return {status:true}
      }catch(err){
        return {status:false,err:err}
      }

    }else{
      return { status: false, err: "A Meta não existe!" }
    }

  }

  async delete(IDMETA){

    console.log("Model: ", IDMETA)
    var idIsTrue = await this.findById(IDMETA)
    console.log(idIsTrue)
    if(idIsTrue != undefined){
      try{
        await knex.delete().where({IDMETA:IDMETA}).table("meta")
        return {stats: true}
      }catch(err){
        return {stats:false, err:err}
      }
    }


  }

}

module.exports = new Meta();