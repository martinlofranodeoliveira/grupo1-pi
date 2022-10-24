let admins = require('../database/admins.json');


function admin(req, res, next) {
    let email = req.body.email;
    let senha = req.body.senha;

    if (email && senha){
        admins.forEach(usr => {
            if (email == usr.email && senha == usr.senha) {
                next();
            }
        });
    }else{
        res.send('Você não tem permissão para acessar essa página');
    }
}

module.exports = admin;