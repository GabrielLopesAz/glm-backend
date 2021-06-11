const knex = require("../database/connection")
var Banco = require("../models/Banco")


class bancoController {
  async index(req, res) {
    var bancos = await Banco.findAll()
    // console.log(bancos)
    res.json(bancos)

  }
  async indexOne(req, res) {
    var id = req.params.id
    // console.log(req.params, id, req.params.IDBANCO)

    var bancoOne = await Banco.findById(id)
    // console.log(bancoOne,id)
    if (bancoOne == undefined) {
      res.status(404).json({})
    } else {
      res.json(bancoOne)
    }
  }

  async create(req, res) {
    // console.log(req.body); 
    var { CODBANCO, NOMEBANCO, SIGLABANCO } = req.body
    var nomebanco = req.body.NOMEBANCO
    // console.log("Inicio: ",CODBANCO,nomebanco, NOMEBANCO, SIGLABANCO)

    if (CODBANCO == undefined || NOMEBANCO == undefined || SIGLABANCO == undefined) {
      res.status(400).send("Campos invalidos")

    } else {
      if (CODBANCO < 0) {
        res.status(403).send("id ou codigo invalidos")
      } if (NOMEBANCO = '' || SIGLABANCO == '') {
        res.status(403).send("Nome do banco ou sigla invalido invalidos")
      }


      // console.log("Controller: ",nomebanco,CODBANCO, NOMEBANCO, SIGLABANCO)
      await Banco.create(CODBANCO, nomebanco, SIGLABANCO)
      //  console.log("worked ")

      res.status(200).send("Dados inserido com sucesso")
    }

  }

  async update(req, res) {
    console.log(req.body)
    // Sei que é melhor usar o desestruturing mas como nesse model comecei meio cagado e ele é pequeno é o que tem pra hoje
    // var{idbanco,codbanco,nomebanco,siglabanco} = req.body
    var idbanco = req.body.IDBANCO;
    var codbanco = req.body.CODBANCO;
    var nomebanco = req.body.NOMEBANCO;
    var siglabanco = req.body.SIGLABANCO;


    console.log("inicio: ", idbanco, codbanco, nomebanco, siglabanco)

    var result = await Banco.update(idbanco, codbanco, nomebanco, siglabanco)
    if (result != undefined) {
      if (result.status) {
        res.status(200).send("Dados atualizados com sucesso")
      } else {
        res.status(406).send(result.err)

      }
    } else {
      res.status(406).send("Erro no servidor")
    }
  }

  async delete(req, res) {
    var id = req.params.id;

    var result = await Banco.delete(id)
    if (result.status) {
      res.status(200).send("Deletado com sucesso")
    } else {
      res.status(406).send(result.err)
    }
  }
}


module.exports = new bancoController()