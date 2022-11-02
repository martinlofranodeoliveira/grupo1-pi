const { validationResult } = require("express-validator");
const bcrtpt = require("bcrypt");
const User = require("../models/Users");

const Users = {
  cadastro: (req, res) => {
    res.render("cadastro", {
      title: "Cadastro-Usuario",
    });
  },

  salvarCadastro: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("cadastro", {
        title: "Cadastro-Usuario",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userExists = User.findUserByField("email", req.body.email);

    if (userExists) {
      return res.render("cadastro", {
        title: "Cadastro-Usuario",
        errors: {
          email: {
            msg: "Este Email ja foi cadastrado",
          },
        },
        oldData: req.body,
      });
    }

    let UsertoCreate = {
      ...req.body,
      senha: bcrtpt.hashSync(req.body.senha, 10),
      confisenha: bcrtpt.hashSync(req.body.confisenha, 10),
      avatar: req.file.filename,
    };

    let UserCreate = User.create(UsertoCreate);
    res.render("painel-usuario", {
      title: "Painel-Usuario",
    });
  },


  /* area de login  */
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
          res.cookie("email", req.body.email, { maxAge: 1000 * 60 * 60 });
        }
        return res.redirect("/painel-usuario");
      }
      return res.render("login-usuario", {
        errors: {
          email: {
            msg: "Credenciais Inválidas",
          },
          senha: {
            msg: "Senha incorreta",
          },
        },
      });
    }
    return res.render("login-usuario", {
      errors: {
        email: {
          msg: "Credenciais inválidas",
        },
        senha: {
          msg: "Credenciais inválidas",
        },
      },
    });
  },
  logout: (req, res) => {
    res.clearCookie("usuario");
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = Users;
