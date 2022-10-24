const path = require("path");
const transporter = require("../public/js/nodemailer");
const md5 = require("md5");
const fs = require("fs");
const User = require('../models/Users.js');
const loginController = {
  login: (req, res) => {
    res.render("login-usuario", {
      title: "Login Usuário",
    });
  },
  salvarCadastro: (req, res) => {
    console.log(User.cadastro.getUsers());
    let usuarios = User.cadastro.getUsers();
    let { nome, email, senha, telefone } = req.body;
    let avatar = req.files.avatar;
    let avatarName = avatar.name;
    let avatarPath = avatar.path;
    let avatarType = avatar.mimetype;
    let avatarSize = avatar.size;
    let avatarNameSplit = avatarName.split(".");
    let avatarExt = avatarNameSplit[avatarNameSplit.length - 1];
    let avatarNameNew = `${md5(avatarName)}.${avatarExt}`;
    let avatarPathNew = path.join(__dirname, "../public/img/avatar", avatarNameNew);
    let avatarPathNew2 = `/img/avatar/${avatarNameNew}`;
    let senhaCript = md5(senha);
    let usuario = {
      nome,
      email,
      senha: senhaCript,
      telefone,
      avatar: avatarPathNew2,
    };
    usuarios.cadastro.push(usuario);
    fs.writeFileSync(User.fileName, JSON.stringify(usuarios));
    fs.renameSync(avatarPath, avatarPathNew);
    res.redirect("/painel-usuario");
  },
  loginCadastro: (req, res) => {
    let usuarios = User.cadastro.getUsers();
    let { email, senha } = req.body;
    let senhaCript = md5(senha);
    let usuario = usuarios.cadastro.find((usuario) => {
      return usuario.email == email && usuario.senha == senhaCript;
    });
    if (usuario) {
      req.session.usuario = usuario;
      res.redirect("/painel-usuario");
    } else {
      res.redirect("/login-usuario");
    }
  },
  logout: (req, res) => {
    res.clearCookie("usuario");
    req.session.destroy();
    res.redirect("/");
  },

};
module.exports = loginController;