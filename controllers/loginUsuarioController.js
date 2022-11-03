const path = require("path");
const { validationResult } = require('express-validator');
const transporter = require("../public/js/nodemailer");
const session = require('express-session');
const cookieParser = require('cookie-parser');
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
  loginCadastro: (req, res) => {
    let userExists = User.findUserByField("email", req.body.email);
    if (userExists) {
      let passwordMatch = bcrypt.compareSync(req.body.senha, userExists.senha);
      if (passwordMatch) {
        req.session.userLogged = userExists;
        if (req.body.lembrar) {
          res.cookie("email", req.body.email, { maxAge: (1000 * 60) * 60 })
        }
        return res.redirect("/painel-usuario");
      }
      return res.render("login-usuario", {
        errors: {
          email: {
            msg: "Credenciais Inválidas",
          },
          senha: {
            msg: "Senha incorreta"
          }
        }
      });
    }
    return res.render("login-usuario", {
      errors: {
        email: {
          msg: "Credenciais inválidas"
        },
        senha: {
          msg: "Credenciais inválidas"
        }
      }
    });

  },
  logout: (req, res) => {
    res.clearCookie("usuario");
    req.session.destroy();
    res.redirect("/");
  },

};
module.exports = loginController;