const { validationResult } = require('express-validator');
const bcrtpt = require('bcrypt');
const User = require('../models/Users');



const cadastroController = {
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

    let userExists = User.findUserByField('email', req.body.email);

    if(userExists){
      return res.render('cadastro', {
        title: "Cadastro-Usuario",
        errors: {
          email:{
            msg: 'Este Email ja foi cadastrado'
          }
        },
        oldData: req.body
      });
    }


    let UsertoCreate = {
      ...req.body,
      senha: bcrtpt.hashSync(req.body.senha, 10),
      confisenha: bcrtpt.hashSync(req.body.confisenha, 10),
      avatar: req.file.filename
    }




    
    let UserCreate =  User.create(UsertoCreate)
    res.render('painel-usuario',{
      title: "Painel-Usuario",
    });

  },

};
module.exports = cadastroController;