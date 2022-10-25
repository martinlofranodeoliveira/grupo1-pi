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
  salvarCadastro: (req, res) => {
   const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("login-usuario", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userExists = User.findByField("email", req.body.email);
      if (userExists) {
        return res.render("login-usuario", {
          errors: {
            email: {
              msg: "Este email já está cadastrado",
            },
          },
          oldData: req.body,
        });
      }


    let userToCreate = {
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 10),
    }

    let userCreate = User.create(userToCreate);


    User.create(req.body);
    res.redirect("/painel-usuario");
  },
  loginCadastro: (req, res) => {
    let userExists = User.findByField("email", req.body.email);
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
            msg: "Credenciais inválidas"
          }
        }
      });
    }
    return res.render("login-usuario", {
      errors: {
        email: {
          msg: "Usuário não cadastrado"
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