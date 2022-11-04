const User = require('../models/Users');

function UserDados (req, res, next) {

res.locals.islogin = false;

let Email = req.cookies.email;
let userFromCookie = User.findUserByField('email', Email) ;

if(userFromCookie) {
   req.session.userLogged = userFromCookie
}



if(req.session.userLogged){
   res.locals.islogin = true;
}

next();

}

module.exports = UserDados;