const express = require('express');
const IndexController = require('../controllers/IndexController')
const router = express.Router();

router.get('/criar', IndexController.criarUsuario);
router.get('/deletar', (req, res)=>res.send("Deletando um usuário"));

module.exports = router;
