const path = require("path");

const produtosController = {
    login: (req, res) => {
        
        res.render("produtos", {
            title: 'Produtos',
        });
    },
};
module.exports = produtosController