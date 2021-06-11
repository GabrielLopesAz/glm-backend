const knex = require("../database/connection")

class CatReceita{

  async findAll(){

    try{
     var result= await knex.select(["NOME","DESCRICAO"]).table("catreceita")
      return result
    }catch(err){
      console.log(err)
    }
  }

  async findById(id){

    try{
     var result = await knex.select(["NOME","DESCRICAO"]).where({ID:id}).table("catreceita")
     if(result.length > 0){
      return result[0]
     }else{
       return undefined
     }  
     
    }catch(err){
      console.log(err)
    }
  }
  async findByCat(NOME){

    try{
     var result = await knex.select(["NOME","DESCRICAO"]).where({NOME:NOME}).table("catreceita")
     if(result.length > 0){
      return true
     }else{
       return false
     }  
     
    }catch(err){
      console.log(err)
    }
  }

  async create(NOME,DESCRICAO){
    // console.log("Model: ", NOME, DESCRICAO)
    try{
      await knex.insert({NOME:NOME,DESCRICAO:DESCRICAO}).table("catreceita")

    }catch(err){
      console.log(err)
      res.status(406).send(err)
    }

  }

  async update(ID,NOME,DESCRICAO){

    var id = await this.findById(ID)

    if(id != undefined){
      var edit = {};

      if(NOME != undefined){
        if(NOME != Categoria.NOME){
          var result = await this.findByCat(NOME)
            if(result == false){
              edit.NOME = NOME
            }else{
              return{status: false, err:"Categoria ja cadastrada"}
            }
        }
      }
      if(DESCRICAO != undefined){
        edit.DESCRICAO = DESCRICAO
      }

      try{
        await  knex.update(edit).where({ID:ID}).table("catreceita")
        return {status:true}
      }catch(err){
        return {status:false,err:err}
      }

    }else{
      return { status: false, err: "A categoria não existe!" }
    }

  }

  async delete(ID){

    var idIsTrue = await this.findById(ID)

    if(idIsTrue != undefined){
      try{
        await knex.delete().where({ID:ID}).table("catreceita")
        return {stats: true}
      }catch(err){
        return {stats:false, err:err}
      }
    }


  }
  
} // fim da classe

module.exports = new CatReceita();