const path = require("path");

const planoUsuarioController = {
    selecaoPlano: (req, res) => {
        
        res.render("plano-usuario", {
            title: 'Seleção de Plano Usuário',
        });
    },
};
module.exports = planoUsuarioController