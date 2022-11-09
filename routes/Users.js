let express = require('express')
let router = express.Router();


/* controlles */
const Users = require('../controllers/UsersController')

/* middlewares */
const checkRegistration = require('../middlewares/verifyRegistroUsuario.js');//verificar os campos input 
const uploadFile = require('../middlewares/multerMidleware.js');//salvar imagens 
const Logged  = require('../middlewares/logado');
const notLogged = require('../middlewares/naoLogado');

/* area de cadastro */
router.get('/cadastro',Logged, Users.cadastro)
router.post('/salvarcadastro', uploadFile.single('avatar'), checkRegistration,  Users.salvarCadastro)//recebre dados via post 

/* area de login  */
router.get('/login',Logged, Users.login)
router.post('/login', Users.loginCadastro) //receber dados via post 

/* painels usuarios e parceiro */
router.get("/painel-parceiro",notLogged, Users.dashboard); //painel parceiro
router.get("/painel-usuario",notLogged, Users.dashboardUsuario); // painel usuario


/* sair perfil */
router.get("/sair",notLogged, Users.logout);

module.exports = router;
