let express = require("express");
let router = express.Router();
const validaContato = require("../middlewares/contato");

/* controllers */
const homeUsers = require("../controllers/homeController");
const Logged = require("../middlewares/logado");
const Users = require("../controllers/UsersController");




/* home  */
router.get("/",Logged, Users.index);
router.post("/", validaContato, homeUsers.contato); // POST /home

/* planos */
router.get('/plano-usuario', homeUsers.selecaoPlano)//plano usuarios 
router.get('/plano-parceiro', homeUsers.selecaoPlanoProfissional)//planos parceiro


/* checkoutPlanos */
router.get('/checkout-planos',homeUsers.checkoutPlanos)//checkoutPlanos

router.get('/checkout', homeUsers.checkout)//checkout

module.exports = router;
