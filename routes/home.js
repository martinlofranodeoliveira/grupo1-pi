let express = require("express");
let router = express.Router();

/* controllers */
const homeUsers = require("../controllers/homeController");



/* planos */
router.get('/plano-usuario', homeUsers.selecaoPlano)//plano usuarios 
router.get('/plano-parceiro', homeUsers.selecaoPlanoProfissional)//planos parceiro

/* checkoutPlanos */
router.get('/checkout-Planos',homeUsers.checkoutPlanos)//checkoutPlanos

router.get('/checkout', homeUsers.checkout)//checkout

module.exports = router;
