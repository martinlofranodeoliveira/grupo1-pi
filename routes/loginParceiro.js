let express = require('express')
let router = express.Router();

const loginParceiroController = require('../controllers/loginParceiroController')


router.get('/login-parceiro', loginParceiroController.login)
module.exports = router;