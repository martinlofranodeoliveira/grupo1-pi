const path = require("path");
const transporter = require("../public/js/nodemailer");
const md5 = require('md5');

const loginUsuarioController = {
    login: (req, res) => {
        
        res.render("login-usuario", {
            title: 'Login Usuário',
        });
    },
    salvarCadastro: (req, res) => {
        
        console.log (req.body);
    },
    loginCadastro: (req, res) => {
        
        console.log (req.body);
    },
};
module.exports = loginUsuarioController