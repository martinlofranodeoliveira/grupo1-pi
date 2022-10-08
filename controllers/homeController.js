const path = require("path");

const homeController = {
    index: (req, res) => {
        
        res.render("index", {
            title: 'Página Inicial',
        });
    },
    envioFormulario: (req, res) => {
       /*  console.log (req.body) */
        let nome = req.body.nome;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let mensagem = req.body.mensagem;
        

        let contato = [];

        let novoContato = {
            nome,
            email,
            telefone,
            mensagem,
        };


        let fs = require("fs");

        fs.writeFile("../database/contato.json", json, "utf8", function (err) {

            if (err) {
                return console.log(err);

            }

            res.redirect('/');

        }); 
        contato.push(novoContato); 
         
        
    },
    
}; 
module.exports = homeController