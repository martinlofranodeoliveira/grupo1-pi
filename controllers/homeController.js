const path = require("path");

const homeController = {
    index: (req, res) => {
        res.render("index", {
            title: 'Página Inicial',
        });
    },
    
}; 
module.exports = homeController