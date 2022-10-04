const path = require("path");

const descricaoProdutoController = {
    descricaoProduto: (req, res) => {
        
        res.render("descricao-produto", {
            title: 'Descrição Produto:',
        });
    },
};
module.exports = descricaoProdutoController