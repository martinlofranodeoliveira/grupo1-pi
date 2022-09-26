
/* const express = require('express');
const rotasLoginUsuario = require('./rotas/rotasLoginUsuario');

let app = express();
app.get('/', (req,res)=>res.send(''));
app.use('/login-usuario', rotasLoginUsuario);
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000")) */


// Galeria de imagens modal
function onClick(element) {
  
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}


// Alterne entre mostrar e ocultar a barra lateral ao clicar no ícone do menu
var mySidebar = document.getElementById("mySidebar");

function consult_open() {
    if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    } else {
    mySidebar.style.display = 'block';
    }
}

// fechar o sidebar quando clicar no botao x 
function consult_close() {
    mySidebar.style.display = "none";

}

// Criação do evento no botão Formulário de Contato
document.querySelector('.botaoEnviaForm').addEventListener('click',function (event){
  event.preventDefault();
  if(formulario.Nome.value.length > 100){
      alert("Nome com mais de 100 caracteres");
      formulario.Nome.focus();
      return false;
  }
  if (formulario.Email.value.length > 100){
      alert("Email com mais de 100 caracteres");
      formulario.Email.focus();
      return false;
  }
  if (formulario.Telefone.value.length > 15){
      alert("Telefone com mais de 15 caracteres");
      formulario.Telefone.focus();
      return false;
  }
  if (formulario.Mensagem.value.length > 1000){
      alert("Mensagem com mais de 1000 caracteres");
      formulario.Mensagem.focus();
      return false;
  }

  if (formulario.Telefone.value.length < 8){
      alert("Telefone com menos de 8 caracteres");
      formulario.Telefone.focus();
      return false;
  }
  if (isNaN(formulario.Telefone.value)){
    alert("Telefone deve ser números");
    formulario.Telefone.focus();
    return false;
    }
  if(formulario.Nome.value === "") {
    alert("Campo nome não foi preenchido");
    formulario.Nome.focus();
    return false;
  }
  if(formulario.Email.value === "") {
    alert("Campo email não foi preenchido");
    formulario.Email.focus();
    return false;
  }
  if(formulario.Telefone.value === "") {
    alert("Campo telefone não foi preenchido");
    formulario.Telefone.focus();
    return false;
  }
  if(formulario.Mensagem.value === "") {
    alert("Campo mensagem não foi preenchido");
    formulario.Mensagem.focus();
    return false;
  }
  alert("Dados enviados com sucesso!"); 
  // return true;
});