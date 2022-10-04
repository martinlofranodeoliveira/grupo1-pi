const path = require("path");

const produtosController = {
    listaProdutos: (req, res) => {
        
        res.render("produtos", {
            title: 'Produtos',
        });
    },
};
module.exports = produtosController