//NODE MODULES ------------------------------------------------------------------------
const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override');
const logMiddleware = require('./middlewares/log');
//CHAMADA DAS ROTAS ------------------------------------------------------------------------
const routerHome = require('./routes/home.js')
const routerAdmin = require('./routes/admin.js')
const routerLoginUsuario = require('./routes/loginUsuario.js')
const routerPainelUsuario = require('./routes/painelUsuario.js')
const routerLoginParceiro = require('./routes/loginParceiro.js')
const routerPainelParceiro = require('./routes/painelParceiro.js')
const routerProdutos = require('./routes/produtos.js')
const routerServicos = require('./routes/servicos.js')
const routerDescricaoProduto = require('./routes/descricaoProduto.js')
const routerCarrinho = require('./routes/carrinho.js')
const routerCheckout = require('./routes/checkout.js')
const routerCheckoutPlanos = require('./routes/checkoutPlanos.js')
const routerPlanoUsuario = require('./routes/planoUsuario.js')
const routerPlanoParceiro = require('./routes/planoParceiro.js')

//MIDDLEWARES ------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(logMiddleware);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));


//USO DAS ROTAS ------------------------------------------------------------------------
app.use('/', routerHome)
app.use('/', routerAdmin)
app.use('/', routerLoginUsuario)
app.use('/', routerPainelUsuario)
app.use('/', routerLoginParceiro)
app.use('/', routerPainelParceiro)
app.use('/', routerProdutos)
app.use('/', routerServicos)
app.use('/', routerDescricaoProduto)
app.use('/', routerCarrinho)
app.use('/', routerCheckout)
app.use('/', routerCheckoutPlanos)
app.use('/', routerPlanoUsuario)
app.use('/', routerPlanoParceiro)
app.use((req, res) => {
    return res.status(404).render('404')
}) //Rota de erro 404


//SERVIDOR LOCAL ---------------------------------------------------------------
app.listen(3000, () => {console.log("Servidor rodando na porta 3000 🚀")});

module.exports = app;