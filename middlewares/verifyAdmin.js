let admins = require('../database/admins.json');

function admin(req, res, next) {
    let user = req.body.user;
    let password = req.body.password;

    if (user && password){
        admins.forEach(usr => {
            if (user == usr.user && password == usr.password) {
                next();
            }
        });
    }else{
        res.send('Você não tem permissão para acessar essa página');
    }
}

module.exports = admin;