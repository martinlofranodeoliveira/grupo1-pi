function naoLogadoAdmin (req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/login-admin')
    }
    next()
}

module.exports = naoLogadoAdmin;