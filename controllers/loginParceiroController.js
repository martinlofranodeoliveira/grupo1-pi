const path = require("path");

const loginParceiroController = {
    login: (req, res) => {
        
        res.render("login-parceiro", {
            title: 'Login Parceiro',
        });
    },
};
module.exports = loginParceiroController