const path = require("path");

const homeController = {
    index: (req, res) => {
        res.render("index", {
            title: 'Página Inicial',
        });
    },

    dashboard: (req, res) => {
        
        res.render("painel-parceiro", {
            title: 'Dashboard Parceiro',
        });
    },

    dashboardUsuario: (req, res) => {
        
        res.render("painel-usuario", {
            title: 'Dashboard usuario',
        });
    },

    selecaoPlano: (req, res) => {
        
        res.render("plano-usuario", {
            title: 'Seleção de Plano Usuário',
        });
    },

    selecaoPlanoProfissional: (req,res) => {
          
        res.render("plano-parceiro", {
            title: 'Seleção de Plano parceiro',
        });
        
    },

    checkout: (req, res) => {
        res.render("checkout", {
            title: 'Finalização de Compra',
        });
    },

    checkoutPlanos: (req, res) => {
        res.render("checkout-planos", {
            title: 'Finalização de Compra Planos',
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
    
}; 
module.exports = homeController