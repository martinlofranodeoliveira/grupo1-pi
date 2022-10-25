const path = require("path");
const { validationResult } = require('express-validator');
const transporter = require("../public/js/nodemailer");
const md5 = require("md5");
const bcrypt = require("bcrypt");
const fs = require("fs");
const User = require('../models/Users');
const loginController = {
  login: (req, res) => {
    res.render("login-usuario", {
      title: "Login Usuário",
    });
  },
  salvarCadastro: (req, res) => {
   const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("login-usuario", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    let userToCreate = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    }

    let userCreate = User.create(userToCreate);


    User.create(req.body);
    res.redirect("painel-usuario");
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