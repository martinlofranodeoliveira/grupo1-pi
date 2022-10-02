let express = require('express')
let router = express.Router();

const painelParceiroController = require('../controllers/painelParceiroController.js')


router.get('/painel-parceiro', painelParceiroController.login)
module.exports = router;