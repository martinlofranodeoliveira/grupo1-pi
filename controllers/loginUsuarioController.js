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
    let email = req.body.email; //pega o email do form
    let senha = req.body.senha; //pega a senha do form
    let cadastro = fs.readFileSync("./database/usuarios.json", "utf8"); //pega as informações do arquivo usuarios.json
    cadastro = JSON.parse(cadastro); //transforma as informações do arquivo em objeto
    let existe = false; //cria uma variável para verificar se o email existe no arquivo
    for (var i = 0; i < cadastro.length; i++) { //faz uma verificaçao no arquivo usuarios.json
      if (cadastro[i].email === email && cadastro[i].senha === senha) {
        existe = true;
      }
    }
    if (existe) { //se o email e senha existirem no arquivo, redireciona para a página de perfil
      res.redirect("/painel-usuario")
    } else {
      res.redirect("/login-usuario"); //se o email e senha não existirem no arquivo, redireciona para a página de login
    } 
  }
,
salvarCadastro: (req, res) => {

  let nome = req.body.nome;
  let endereco = req.body.endereco;
  let email = req.body.email; //pega o email do form
  let senha = md5(req.body.senha); //pega a senha do form
  let confsenha = md5(req.body.confsenha); //pega a confirmação de senha do form
  let fs = require("fs"); //importa o módulo fs
  let cadastro = fs.readFileSync("./database/usuarios.json", "utf8"); //pega as informações do arquivo usuarios.json
  cadastro = JSON.parse(cadastro); //transforma as informações do arquivo em objeto
  let novoCadastro = { //cria um objeto com as informações do form
    nome: nome,
    email: email,
    senha: senha
  }
  if (senha != confsenha || nome == "" || email == "" || senha == "" || confsenha == "") { //verifica se as senhas são iguais e se os campos estão preenchidos 
    res.redirect("/login-usuario") //se não estiverem, redireciona para a página de login
  } else { //se estiverem, salva as informações no arquivo usuarios.json
    let existe = false; //cria uma variável para verificar se o email existe no arquivo
    for (var i = 0; i < cadastro.length; i++) { //faz uma verificaçao no arquivo usuarios.json
      if (cadastro[i].email == novoCadastro.email) { //verifica se o email já existe no arquivo
        existe = true; //se existir, a variável existe recebe true
      }
    }
    if (existe) { //se existe, manda para login
      res.redirect("/login-usuario");
    } else { //se não existe, salva as informações no arquivo usuarios.json
      cadastro.push(novoCadastro); //insere um novo objeto no arquivo usuarios.json
      fs.writeFile("./database/usuarios.json", JSON.stringify(cadastro), "utf8", function (err) { //salva as informações no arquivo usuarios.json
        res.redirect("/painel-usuario") //redireciona para a página de perfil
        transporter.sendMail({ //envia um email para o usuário
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
        }).then((msg) => { //se o email for enviado, mostra no console
          console.log(msg); //mostra no console
        }).catch((erro) => { //se o email não for enviado, mostra no console
          console.log(erro);  //mostra no console
        })
      })
    }
  }

}
};
module.exports = loginController;