var gmailCadastro = document.getElementById("gmail-cadrastro");
var senhaCadastro = document.getElementById("senha-cadrastro");
var nomeCadastro = document.getElementById("nome");

var  btnEntrar = document.getElementById("Ientra-cadrastro");




function validaCadastro(){
  var usuarios = localStorage.getItem("usuarios");
  usuarios = JSON.parse(usuarios);

  if(usuarios == null){
    usuarios = [];
  }

  var usuario = {
        nome: nomeCadastro.value,
        email: gmailCadastro.value,
        senha: gmailCadastro.value
  };
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário criado com sucesso");
}

btnEntrar.addEventListener("click", validaCadastro);