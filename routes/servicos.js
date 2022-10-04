let express = require('express')
let router = express.Router();

const servicosController = require('../controllers/servicosController.js')


router.get('/servicos', servicosController.listaServicos)
module.exports = router;