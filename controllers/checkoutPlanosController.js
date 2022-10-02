
const path = require("path");

const checkoutPlanosController = {
    
    checkoutPlanos: (req, res) => {
        res.render("checkout-planos", {
            title: 'Finalização de Compra Planos',
        });
    },
};
module.exports = checkoutPlanosController
