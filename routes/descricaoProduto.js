let express = require('express')
let router = express.Router();

const descricaoProdutoController = require('../controllers/descricaoProdutoController.js')


router.get('/descricao-produto', descricaoProdutoController.descricaoProduto)
module.exports = router;