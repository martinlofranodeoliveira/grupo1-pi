let express = require('express')
let router = express.Router();
const { check } = require('express-validator');
const path = require('path');
const fs = require('fs');

const loginUsuarioController = require('../controllers/loginUsuarioController.js')
const loginMiddlewares = require('../middlewares/verifyRegistroUsuario.js');
const uploadFile = require('../middlewares/multerMidleware.js');

router.get('/login-usuario', loginUsuarioController.login)
router.post('/login', loginUsuarioController.loginCadastro)
module.exports = router;
