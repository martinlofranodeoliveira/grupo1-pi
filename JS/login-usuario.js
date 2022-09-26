var usuarios = [
    {
      "nome": "Martin",
      "email": "genesisrecordshouse@gmail.com",
      "senha": "123456",
    },
    {
      "nome": "Gustavo",
      "email": "gustavo@gmail.com",
      "senha": "123456",
    },
    {
      "nome": "Italo",
      "email": "italo@gmail.com",
      "senha": "123456",
    }
  ];

  function logar(){
    var email = document.getElementById("gmail-login").value;
    var senha = document.getElementById("senha-login").value;
  
    for(var i = 0; i < usuarios.length; i++){
      if(usuarios[i].email == email && usuarios[i].senha == senha){
        localStorage.setItem("usuario", JSON.stringify(usuarios[i]));
        window.location = "panelPatient.html";
        return;
      }
    }
  
    alert("Usuario ou senha incorretos!");
  }

  function cadastrar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("gmail-cadrastro").value;
    var senha = document.getElementById("senha-cadrastro").value;
  
    var usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
  
    usuarios.push(usuario);
  
    alert("Usuario cadastrado com sucesso!");
  }

  function verificarUsuarioLogado(){
    if(localStorage.getItem("usuario")){
      window.location = "panelPatient.html";
    }
  }