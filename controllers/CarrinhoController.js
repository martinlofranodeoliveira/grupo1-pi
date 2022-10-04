
const path = require("path");

const carrinhoController = {
    removeItem: function(req, res){},
    getItem: function(req, res){},
    addItem: function(req, res){},
    carrinho: (req, res) => {
        
        res.render("carrinho", {
            title: 'Carrinho de Compras',
        });
    },
};
module.exports = carrinhoController
