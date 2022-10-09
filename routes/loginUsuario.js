let express = require('express')
let router = express.Router();

const loginUsuarioController = require('../controllers/loginUsuarioController.js')


router.get('/login-usuario', loginUsuarioController.login)
router.post('/salvarcadastro', loginUsuarioController.salvarCadastro)
router.post('/login', loginUsuarioController.loginCadastro)
module.exports = router;