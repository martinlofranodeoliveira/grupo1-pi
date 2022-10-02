let express = require('express')
let router = express.Router();

const planoParceiroController = require('../controllers/planoParceiroController.js')


router.get('/plano-parceiro', planoParceiroController.selecaoPlano)
module.exports = router;