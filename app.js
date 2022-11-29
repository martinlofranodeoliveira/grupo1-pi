//NODE MODULES ------------------------------------------------------------------------
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const logMiddleware = require("./middlewares/log");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const UserDados = require('./middlewares/UserDados');


//CHAMADA DAS ROTAS ------------------------------------------------------------------------
const routerHome = require("./routes/home.js");
const routerProdutos = require("./routes/produtos.js");
const routerServicos = require("./routes/servicos.js");
const routerDescricaoProduto = require("./routes/descricaoProduto.js");
const routerCarrinho = require("./routes/carrinho.js");
const Users = require("./routes/Users.js");
const admin = require("./routes/admin.js");
const routerAdmin = require("./routes/admin.js");

//MIDDLEWARES ------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(logMiddleware);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(
  session({
    secret: "secret-PI-Grupo-01",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(UserDados);

//USO DAS ROTAS ------------------------------------------------------------------------
app.use("/", routerHome);
app.use("/", Users);
app.use("/", admin);
app.use("/", routerProdutos);
app.use("/", routerServicos);
app.use("/", routerDescricaoProduto);
app.use("/", routerCarrinho);
app.use((req, res) => {
  return res.status(404).render("404");
}); //Rota de erro 404

//SERVIDOR LOCAL ---------------------------------------------------------------
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});

module.exports = app;
