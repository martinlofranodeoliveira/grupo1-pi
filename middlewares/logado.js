function logadoUser (req, res , next) {
  if(req.session.userLogged) {
    return res.redirect('/painel-usuario')
  }
  
  next()
}
module.exports = logadoUser;