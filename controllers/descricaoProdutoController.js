const fs = require('fs');
const path = require("path");

const produtosFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(produtosFilePath, 'utf-8'));

const descricaoProdutoController = {
    descricaoProduto: (req, res) => {
        let id = req.params.id;
        let descricaoProduto = products.find(product => product.id ==id);
        res.render('descricao-produto', {descricaoProduto});
    },
};
module.exports = descricaoProdutoController