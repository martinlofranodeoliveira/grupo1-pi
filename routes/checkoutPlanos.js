let express = require('express')
let router = express.Router();

const checkoutPlanosController = require('../controllers/checkoutPlanosController.js')


router.get('/checkout-planos', checkoutPlanosController.checkoutPlanos)
module.exports = router;