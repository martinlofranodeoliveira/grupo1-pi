let express = require('express')
let router = express.Router();

const cadastroUsuarioController = require('../controllers/cadastroController.js')
const cadastroMiddlewares = require('../middlewares/verifyRegistroUsuario.js');
const uploadFile = require('../middlewares/multerMidleware.js');

router.get('/cadastro', cadastroUsuarioController.cadastro)
router.post('/salvarcadastro', uploadFile.single('avatar'), cadastroMiddlewares,  cadastroUsuarioController.salvarCadastro)

module.exports = router;
