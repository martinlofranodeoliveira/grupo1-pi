let express = require('express')
let router = express.Router();

const checkoutController = require('../controllers/checkoutController.js')


router.get('/checkout', checkoutController.checkout)
module.exports = router;