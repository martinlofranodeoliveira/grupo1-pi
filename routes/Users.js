let express = require('express')
let router = express.Router();


/* controlles */
const Users = require('../controllers/UsersController')

/* middlewares */
const checkRegistration = require('../middlewares/verifyRegistroUsuario.js');//verificar os campos input 
const uploadFile = require('../middlewares/multerMidleware.js');//salvar imagens 


/* area de cadastro */
router.get('/cadastro', Users.cadastro)
router.post('/salvarcadastro', uploadFile.single('avatar'), checkRegistration,  Users.salvarCadastro)//recebre dados via post 

/* area de login  */
router.get('/login', Users.login)
router.post('/login', Users.loginCadastro) //receber dados via post 



module.exports = router;
