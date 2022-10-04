let express = require('express')
let router = express.Router();

const carrinhoController = require('../controllers/carrinhoController.js')


router.get('/carrinho', carrinhoController.carrinho)
module.exports = router;