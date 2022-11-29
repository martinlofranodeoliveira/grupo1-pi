const path = require("path");
const { validationResult } = require("express-validator");
const bcrtpt = require("bcrypt");
const UserAdm = require("../models/UsersAdm");


const adminController = {
    admin: (req, res) => {
        
        res.render("admin", {
            title: 'Area Administrativa',
        });
    },
    loginAdmin: (req, res) => {
        res.render("login-admin", {
            title: 'Login Administrativo',
        });
    },
    loginCadastroAdmin: (req, res) => {
        let userExists = UserAdm.findUserAdmByField("email", req.body.email);
        if (userExists) { 
            let passwordMatch = bcrtpt.compareSync(req.body.senha, userExists.senha);
            if (passwordMatch) {
                delete userExists.senha
                req.session.userLogged = userExists;
                res.redirect('/admin')
            } else {
                return res.render("login-admin", {
                    errors: {
                        email: {
                            msg: "Email ou senha incorretos",
                        },
                    },
                    oldData: req.body,
                });
            }
        } else {
            return res.render("login-admin", {
                errors: {
                    email: {
                        msg: "Email ou senha incorretos",
                    },
                },
                oldData: req.body,
            });
        }
    },


    logoutAdmin: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
};
module.exports = adminController