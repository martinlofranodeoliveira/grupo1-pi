let fs = require('fs')
let usuarios = require ("./database/usuarios.json");
let usuarioStr = JSON.stringify(usuarios);

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
        senha: senhaCadastro.value
  };
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário criado com sucesso");
}

btnEntrar.addEventListener("click", validaCadastro);


let usuarios = [
  {
      id: 1,
      nome: 'Martin',
      email: 'genesisrecordshouse@gmail.com'
  },
  {
      id: 2,
      nome: 'Diogenes',
      email: 'diogenes@digitalhouse.com.br'
  },
  {
      id: 3,
      nome: 'Jonatas',
      email: 'jonatas@digitalhouse.com.br'
  }
]


app.use(express.json())
app.get('/login-usuario', (req, res) => {
  res.status(200).send(usuarios)
})

app.post('/login-usuario', (req, res) => {
  usuarios.push(req.body)
  res.status(201).send(usuarios)
})

app.put('/login-usuario/:id', (req, res) => {
  let usuario = usuarios.find(usr => usr.id == req.params.id)

  if (!usuario){
      return res.status(400).json({error: 'Usuario não encontrado.' });
  }

  usuario.nome = req.body.nome
  usuario.email = req.body.email
  usuario.senha = req.body.senha
  res.send(usuarios)
})

app.delete('/usuarios/:id', (req, res) => {
  let usuario = usuarios.find(usr => usr.id == req.params.id)
  usuarios.splice(usuarios.indexOf(usuario), 1)
  res.status(204).send(usuarios)
})


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

