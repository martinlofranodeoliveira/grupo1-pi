let express = require('express')
let router = express.Router();

const homeController = require('../controllers/homeController.js')
const contatoController = require('../controllers/contatoController.js')


router.get('/', homeController.index)
router.post('/', contatoController.envioFormulario)


module.exports = router;