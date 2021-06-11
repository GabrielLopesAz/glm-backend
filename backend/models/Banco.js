const knex = require("../database/connection")

class banco {

  async create(CODBANCO, NOMEBANCO, SIGLABANCO) {
    try {
      // console.log("Model: ",CODBANCO, NOMEBANCO, SIGLABANCO)
      await knex.insert({ CODBANCO, NOMEBANCO, SIGLABANCO }).table("banco");

    } catch (err) {
      console.log(err)
    }
  }
  async findAll() {
    try {
      var result = knex.select(["CODBANCO", "NOMEBANCO", "SIGLABANCO"]).table("banco")
      return result;
    } catch (err) {
      console.log(err)
    }
  }

  async findById(id) {
    try {
      var result = await knex.select(["CODBANCO", "NOMEBANCO", "SIGLABANCO"]).where({ IDBANCO: id }).table("banco")
      if (result.length > 0) {
        return result[0]
      } else {
        return undefined
      }
    } catch (err) {
      console.log(err)
    }
  }

  async findByCod(cod) {
    try {
      var result = await knex.select(["CODBANCO", "NOMEBANCO", "SIGLABANCO"]).where({ CODBANCO: cod }).table("banco")
      if (result.length > 0) {
        return true
      } else {
        return false
      }
    } catch (err) {
      console.log(err)
    }
  }

  /*  async update(idbanco,codbanco,nomebanco,siglabanco){
  
      console.log("Model: ", idbanco,codbanco,nomebanco,siglabanco)
      
      var id = await this.findById(idbanco);
  
      if(id != undefined ){
        var edit = { }
  
        if(codbanco != undefined ){
          if(codbanco != banco.CODBANCO){
            var result = await this.findById(codbanco)
            if(!result){
              edit.CODBANCO = codbanco
            }else{
              return {status: false, err:"Sigla ja cadastrado"}
  
            }
          }
        }
        if(siglabanco != undefined ){
          edit.SIGLABANCO = siglabanco
        }
        if(nomebanco != undefined){
          edit.NOMEBANCO = nomebanco
          
        }
        try{
          console.log(edit)
          await knex.update(edit).where({IDBANCO:idbanco}).table("banco")
          return {status: true}
        }catch(err){
            console.log(err)
            
            return {status: false, err:err}
        }
      }else{
        return {status: false, err:"ERROR 404"}
      }
      
    }
  }
  */

  async update(idbanco, codbanco, nomebanco, siglabanco) {

    var id = await this.findById(idbanco);

    if (id != undefined) {

      var edit = {};

      if (codbanco != undefined) {
        if (codbanco != banco.codbanco) {
          var result = await this.findByCod(codbanco);
          if (result == false) {
            edit.CODBANCO = codbanco;
          } else {
            return { status: false, err: "O codigo já está cadastrado" }
          }
        }
      }

      if (siglabanco != undefined) {
        console.log(siglabanco)
        edit.SIGLABANCO = siglabanco;
      }

      if (nomebanco != undefined) {
        edit.NOMEBANCO = nomebanco;
      }

      try {
        await knex.update(edit).where({ IDBANCO: idbanco }).table("banco");
        return { status: true }
      } catch (err) {
        return { status: false, err: err }
      }

    } else {
      return { status: false, err: "O Banco não existe!" }
    }
  }

  async delete(id) {

    
    console.log("Model: ", id)
 

      try {
        await knex.delete().where({ IDBANCO: id }).table("banco")
        return { Status: true }
      } catch (err) {
        console.log(err)
        return { status: false, err: err }
      }
     

}
}


module.exports = new banco()