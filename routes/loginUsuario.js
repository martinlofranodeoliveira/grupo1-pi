let express = require('express')
let router = express.Router();

const loginUsuarioController = require('../controllers/loginUsuarioController')


router.get('/login-usuario', loginUsuarioController.login)
module.exports = router;