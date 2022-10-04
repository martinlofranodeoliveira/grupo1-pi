let express = require('express')
let router = express.Router();

const painelUsuarioController = require('../controllers/painelUsuarioController.js')


router.get('/painel-usuario', painelUsuarioController.login)
module.exports = router;