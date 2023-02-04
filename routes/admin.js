let express = require('express')
let router = express.Router();

const adminController = require('../controllers/adminController.js')
const logadoAdmin = require('../middlewares/logadoAdmin.js')
const naoLogadoAdmin = require('../middlewares/naoLogadoAdmin.js')


/* area de login  */
router.get('/login-admin', logadoAdmin, adminController.loginAdmin)
router.post('/loginAdm', adminController.loginCadastroAdmin) //receber dados via post

/* area de admin */
router.get('/admin', naoLogadoAdmin, adminController.admin)

/* sair perfil */
router.get("/sair", naoLogadoAdmin, adminController.logoutAdmin);


module.exports = router;