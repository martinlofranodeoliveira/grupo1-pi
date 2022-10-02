const express = require('express');
const app = express();
const path = require('path')

const routerHome = require('./routes/home')
const routerLoginUsuario = require('./routes/loginUsuario')
const routerLoginParceiro = require('./routes/loginParceiro.js')
const routerProdutos = require('./routes/produtos.js')
const routerDescricaoProduto = require('./routes/descricaoProduto.js')
const routerCarrinho = require('./routes/carrinho.js')
const routerCheckout = require('./routes/checkout.js')

app.set('view engine', 'ejs')

app.use('/', routerHome)
app.use('/', routerLoginUsuario)
app.use('/', routerLoginParceiro)
app.use('/', routerProdutos)
app.use('/', routerDescricaoProduto)
app.use('/', routerCarrinho)
app.use('/', routerCheckout)

app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")}) 