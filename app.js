const express = require('express');
const app = express();
const path = require('path')

const routerHome = require('./routes/home')
const routerLoginUsuario = require('./routes/loginUsuario')
const routerLoginParceiro = require('./routes/loginParceiro')

app.set('view engine', 'ejs')

app.use('/', routerHome)
app.use('/', routerLoginUsuario)
app.use('/', routerLoginParceiro)

app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")}) 