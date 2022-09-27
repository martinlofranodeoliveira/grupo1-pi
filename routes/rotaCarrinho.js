let express = require('express')
let router = express.Router();
let CarrinhoController = require('../controllers/CarrinhoController')

router.get('/:item',CarrinhoController.addItem)

module.exports = router