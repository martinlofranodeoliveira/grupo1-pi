const path = require("path");

const servicosController = {
    listaServicos: (req, res) => {
        
        res.render("servicos", {
            title: 'Serviços',
        });
    },
};
module.exports = servicosController