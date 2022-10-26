let express = require('express')
let router = express.Router();

const adminController = require('../controllers/adminController.js')
const verifyAdmin = require('../middlewares/verifyAdmin.js')

router.get('/admin', verifyAdmin, adminController.admin)
module.exports = router;