let express = require('express')
let router = express.Router();

const produtosController = require('../controllers/produtosController.js')


router.get('/produtos', produtosController.listaProdutos);

module.exports = router;