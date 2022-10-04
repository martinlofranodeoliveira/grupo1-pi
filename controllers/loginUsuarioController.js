const path = require("path");

const loginUsuarioController = {
    login: (req, res) => {
        
        res.render("login-usuario", {
            title: 'Login Usuário',
        });
    },
};
module.exports = loginUsuarioController