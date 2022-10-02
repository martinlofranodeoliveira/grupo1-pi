
const path = require("path");

const checkoutController = {
    
    checkout: (req, res) => {
        res.render("checkout", {
            title: 'Finalização de Compra',
        });
    },
};
module.exports = checkoutController
