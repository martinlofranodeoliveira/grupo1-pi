const express = require('express');
const loginController = require('../controllers/loginController')
const router = express.Router();

router.get('/criar', loginController.criarUsuario);
router.get('/deletar', (req, res)=>res.send("Deletando um usuário"));

module.exports = router;
