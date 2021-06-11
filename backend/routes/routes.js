var express = require("express");
var app = express();
var router = express.Router();


var HomeController = require("../controllers/HomeController");
const bancoController = require("../controllers/bancoController");
const CatDespesaController = require("../controllers/CatDespesaController");
const CatReceitaController = require("../controllers/CatReceitaController");
const contaController = require("../controllers/contaController");
const despesaController = require("../controllers/despesaController");
const metaController = require("../controllers/metaController");
const receitaController = require("../controllers/receitaController");

router.get('/', HomeController.index);

/*ROTAS API CATEGORIA */
router.get('/catD',CatDespesaController.index);
router.get('/catD/:id',CatDespesaController.indexOne);
router.post("/catD",CatDespesaController.create);
router.put("/catD",CatDespesaController.update);
router.delete("/catD",CatDespesaController.delete);

router.get('/catR',CatReceitaController.index);
router.get('/catR/:id',CatReceitaController.indexOne);
router.post("/catR",CatReceitaController.create);
router.put("/catR",CatReceitaController.update);
router.delete("/catR",CatReceitaController.delete);


/*ROTAS API DESPESA */

router.get('/despesa',despesaController.index);
router.get('/despesa/:id',despesaController.indexOne);
router.post("/despesa",despesaController.create);
router.put("/despesa",despesaController.update);
router.delete("/despesa",despesaController.delete);


/*ROTAS API RECEITA */

router.get('/receita',receitaController.index);
router.get('/receita/:id',receitaController.indexOne);
router.post("/1/receita",receitaController.create);
router.put("/receita",receitaController.update);
router.delete("/receita",receitaController.delete);


/*ROTAS API META */

router.get('/meta',metaController.index);
router.get('/meta/:id',metaController.indexOne);
router.post("/meta",metaController.create);
router.put("/meta",metaController.update);
router.delete("/meta",metaController.delete);


/*ROTAS API Conta */
router.get('/conta',contaController.index);
router.get('/conta/:id',contaController.indexOne);
router.post("/conta",contaController.create);
router.put("/conta",contaController.update);
router.delete("/conta",contaController.delete);

/* ROTAS API BANCO */
router.get('/banco',bancoController.index);
router.get('/banco/:id',bancoController.indexOne);
router.post('/banco',bancoController.create);
router.put('/banco',bancoController.update);
router.delete('/banco/:id',bancoController.delete);


module.exports = router;