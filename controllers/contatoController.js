const contatoController = {
    
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
module.exports = contatoController