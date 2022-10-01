const express = require('express');
const app = express();
const path = require('path')

const routerHome = require('./routes/home')


app.set('view engine', 'ejs')

app.use('/', routerHome)


app.use(express.static(path.join(__dirname, '/public')));
app.listen(3000, () => {console.log("Servidor rodando na porta 3000")}) 