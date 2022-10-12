const path = require("path");
const transporter = require("../public/js/nodemailer");
const md5 = require("md5");

const loginController = {
    login: (req, res) => {
        res.render("login-usuario", {
            title: "Login Usuário",
        });
    },
    loginCadastro: (req, res) => {
        let fs = require("fs");

        let email = req.body.email;
        let senha = md5(req.body.senha);

        let cadastro = fs.readFileSync("./database/usuarios.json", "utf8");
        cadastro = JSON.parse(cadastro);
        console.log(cadastro);

        let message = (cadastro, email, senha, req, res) => {
          for (var i = 0; i < cadastro.length; i++) {
              if (cadastro[i].email === email && cadastro[i].senha === senha) {
                  req.session.email = email;
                  req.session.senha = cadastro[i].senha;
                  return res.redirect("/painel-usuario")
              } else {
                  return res.redirect("/login-usuario");
              }
          }
      }
    },
    salvarCadastro: (req, res) => {
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = md5(req.body.senha);
        let confisenha = md5(req.body.confisenha);
        let fs = require("fs");
        let cadastro = fs.readFileSync("./database/usuarios.json", "utf8"); //pega as informações do arquivo
        cadastro = JSON.parse(cadastro); //transforma as informações do arquivo em objeto
        let novoCadastro = { //cria um objeto com as informações do form
            nome: nome,
            email: email,
            senha: senha
        }
        if (senha != confisenha || nome == "" || email == "" || senha == "" || confisenha == "") {
            res.redirect("/login-usuario")
        } else {
            let existe = false;
            for (var i = 0; i < cadastro.length; i++) { //faz uma verificação se o email já existe no arquivo e iguala a var existe
                if (cadastro[i].email == novoCadastro.email) {
                    existe = true;
                }
            }
                if (existe) { //se existe, manda para home
                    res.redirect("/login-usuario");
                } else { //se não existe, salva as informações no arquivo
                    cadastro.push(novoCadastro); //insere um objeto no array
                    fs.writeFile("./database/usuarios.json", JSON.stringify(cadastro), "utf8", function (err) { //salva o array no arquivo
                        res.redirect("/painel-usuario")
                        transporter.sendMail({
                          from: "Martin Lofrano <martinguitarrist@gmail.com>",
                          to: email,
                          subject: "Obrigado por testar minha aplicação!",
                          html: `
                            <html>
                            <body>
                              <p>Olá <strong>${nome}</strong>, se este email chegou até você então seu cadastro na aplicação foi feito com sucesso. &#128236; &#9989;</p>
                              <p>Para informações de <strong><a href='https://www.linkedin.com/in/martinlofrano/'>contato</a></strong> é só clicar, valeu. &#128513;</p><br><br>
          
                              <p>&#9940; <strong>Email de contato: martinguitarrist@gmail.com</strong> &#9940;</p
          
                            </body>
                            </html>
                          `
                        }).then((msg) => {
                          console.log(msg);
                        }).catch((erro) => {
                          console.log(erro);
                        })
                    })
                }
            } 
                
          },
};
module.exports = loginController