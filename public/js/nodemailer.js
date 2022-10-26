const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "martinguitarrist@gmail.com", //email que irá enviar as mensagens
    pass: "jtiuveujxshkbtoc" //a senha do mesmo email
  }
});


module.exports = transporter;