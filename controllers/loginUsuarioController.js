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

        cadastro.forEach((item) => {
            if (item.email === email && senha === item.senha) {
                res.redirect("/painel-usuario")
            } else{
                res.redirect("/login-usuario");
            };
        });
    },
    salvarCadastro: (req, res) => {
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = md5(req.body.senha);
        let confisenha = md5(req.body.confisenha);
        let fs = require("fs");



            if(senha != confisenha || nome == "" || email == "" || senha == "" || confisenha == ""){
              Cadastro.destroy({
                where: {
                  nome: nome,
                  email: email,
                  senha: senha
                }
              }).then(() => {
                res.redirect("/login-usuario")
              })
              
               
            } else {
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
            }
            
          },
        
        
    
    
};
module.exports = loginController