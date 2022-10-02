const express = require('express');
const app = express();
const path = require('path')

const routerHome = require('./routes/home.js')
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

app.set('view engine', 'ejs')

app.use('/', routerHome)
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

app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")}) 