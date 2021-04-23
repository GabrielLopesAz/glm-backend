const express = require("express")
const app = express()
const router = express.router()

const contaController = require("../controllers/contaController");
const bancoController = require("../controllers/bancoController");


router.get("/account",contaController.index)

router.get("/banco",bancoController.create)

module.exports = router;
