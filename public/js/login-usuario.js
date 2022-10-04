let fs = require('fs')
let usuarios = require ("./database/usuarios.json");
let usuarioStr = JSON.stringify(usuarios);

var gmailCadastro = document.getElementById("gmail-cadrastro");
var senhaCadastro = document.getElementById("senha-cadrastro");
var nomeCadastro = document.getElementById("nome");

var  btnEntrar = document.getElementById("Ientra-cadrastro");

function adicionarUsuario(usuarios, dadosUsuario){
  let usuarioExistente = false
  let newData = ""

  for (let i = 0; i < usuarios['usuarios'].length;i++){        
      if (dadosUsuario['codigo'] === usuarios['usuarios'][i]['codigo']){
          usuarioExistente = true           
      }
  }
  if (!usuarioExistente){
      usuarios['usuarios'].push(dadosUsuario)
      newData = JSON.stringify(usuarios)
      fs.writeFile ('./database/usuarios.json', newData, err => {
          // Verificação de erros
          (err) ? console.log("Erro ao inserir os dados") : console.log ("Novos dados adicionados");        
      });
      return JSON.parse(newData)
  }else{
      console.log("Usuario já existente")
      return usuarios
  }
}


function validaCadastro(){
  var usuarios = localStorage.getItem("usuarios");
  usuarios = JSON.parse(usuarios);

  if(usuarios == null){
    usuarios = [];
  }

  var usuario = {
        nome: nomeCadastro.value,
        email: gmailCadastro.value,
        senha: senhaCadastro.value
  };
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário criado com sucesso");
}

btnEntrar.addEventListener("click", validaCadastro);