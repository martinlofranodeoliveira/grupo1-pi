const path = require("path");

const painelUsuarioController = {
    login: (req, res) => {
        
        res.render("painel-usuario", {
            title: 'Dashboard Usuário',
        });
    },
};
module.exports = painelUsuarioController