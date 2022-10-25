const fs = require('fs');
const path = require("path");

const produtosFilePath = path.join(__dirname, '../database/products.json');
const products = JSON.parse(fs.readFileSync(produtosFilePath, 'utf-8'));

const produtosController = {
    listaProdutos: (req, res) => {
        res.render("produtos", {
            products,
        });
    },
    // detalheProduto: (req, res) => {
    //     let id = req.params.id;
    //     let detalhaProduto = products.find(product => product.id ==id);
    //     res.render('descricaoProduto', detalhaProduto);
    // },
};
module.exports = produtosController