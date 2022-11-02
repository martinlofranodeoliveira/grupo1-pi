const { validationResult } = require("express-validator");
const bcrtpt = require("bcrypt");
const User = require("../models/Users");

const Users = {
  cadastro: (req, res) => {
    res.render("cadastro");
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
      return res.render("cadastro" ,{
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
    res.redirect('/login')
  },


  /* area de login  */
  login: (req, res) => {
    res.render("login-usuario");
  },
  
  loginCadastro: (req, res) => {
    let userExists = User.findUserByField("email", req.body.email);

    if (userExists) {
      let passwordMatch = bcrtpt.compareSync(req.body.senha, userExists.senha);

      if (passwordMatch) {
        delete userExists.senha
        req.session.userLogged = userExists;
        
        if (req.body.lembrar) {
          res.cookie("userEmail", req.body.email, { maxAge: (3000 * 60 )});
        }

        return res.redirect("/painel-usuario");
      }

      return res.redirect("/login", {
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
    return res.redirect("/login", {
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

  index: (req, res) => {
    res.render("index");
},

dashboard: (req, res) => {
    
    res.render("painel-parceiro")
},

dashboardUsuario: (req, res) => {
    
    res.render("painel-usuario", {
      userLogged : req.session.userLogged
    });
},  


envioFormulario: (req, res) => {
        
  /*  console.log (req.body) */
   let nome = req.body.nome;
   let email = req.body.email;
   let telefone = req.body.telefone;
   let mensagem = req.body.mensagem;
   

   let fs = require("fs");
   let contato = fs.readFileSync("./database/contato.json", "utf8")
   contato = JSON.parse(contato)

   let novoContato = {
       nome,
       email,
       telefone,
       mensagem,
   };

   
   console.log(req.body);
   contato.push(novoContato);
   
   fs.writeFile("./database/contato.json", JSON.stringify(contato), "utf8", function (err) {
       console.log(err) 
       res.redirect("/")
   })

   
},

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();

    res.redirect("/");
  },

}


module.exports = Users;
