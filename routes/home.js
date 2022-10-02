let express = require('express')
let router = express.Router();

const homeController = require('../controllers/homeController.js')


router.get('/', homeController.index)
module.exports = router;