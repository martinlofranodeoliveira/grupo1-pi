let express = require('express')
let router = express.Router();

const loginParceiroController = require('../controllers/loginParceiroController.js')


router.get('/login-parceiro', loginParceiroController.login)
module.exports = router;