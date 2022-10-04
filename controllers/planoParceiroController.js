const path = require("path");

const planoParceiroController = {
    selecaoPlano: (req, res) => {
        
        res.render("plano-parceiro", {
            title: 'Seleção de Plano Parceiro',
        });
    },
};
module.exports = planoParceiroController