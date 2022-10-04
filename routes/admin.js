let express = require('express')
let router = express.Router();

const adminController = require('../controllers/adminController.js')


router.get('/admin', adminController.admin)
module.exports = router;