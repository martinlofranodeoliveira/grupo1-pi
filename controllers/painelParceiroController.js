const path = require("path");

const painelParceiroController = {
    login: (req, res) => {
        
        res.render("painel-parceiro", {
            title: 'Dashboard Parceiro',
        });
    },
};
module.exports = painelParceiroController