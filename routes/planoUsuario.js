let express = require('express')
let router = express.Router();

const planoUsuarioController = require('../controllers/planoUsuarioController.js')


router.get('/plano-usuario', planoUsuarioController.selecaoPlano)
module.exports = router;