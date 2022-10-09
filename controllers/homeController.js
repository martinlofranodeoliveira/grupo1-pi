const path = require("path");

const homeController = {
    index: (req, res) => {
        let fs = require("fs"); 
        let contato = fs.readFileSync("./database/contato.json", "utf8")
        contato = JSON.parse(contato);
        console.log(contato)

        res.render("index", {
            title: 'Página Inicial',
            contato
        });
    },
    
}; 
module.exports = homeController