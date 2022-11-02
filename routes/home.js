let express = require("express");
let router = express.Router();

/* controllers */
const homeUsers = require("../controllers/homeController");

/* home  */
router.get("/", homeUsers.index);
router.post("/", homeUsers.envioFormulario); //receber formularios via post

/* painels usuarios e parceiro */
router.get("/painel-parceiro", homeUsers.dashboard); //painel parceiro
router.get("/painel-usuario", homeUsers.dashboardUsuario); // painel usuario

/* planos */
router.get('/plano-usuario', homeUsers.selecaoPlano)//plano usuarios 
router.get('/plano-parceiro', homeUsers.selecaoPlanoProfissional)//planos parceiro

/* checkoutPlanos */
router.get('/checkout-Planos',homeUsers.checkoutPlanos)//checkoutPlanos

router.get('/checkout', homeUsers.checkout)//checkout

module.exports = router;
