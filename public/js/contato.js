const contatoController = require("../../controllers/UsersController.js");


// Criação do evento no botão Formulário de Contato
 document.querySelector('.botaoEnviaForm').addEventListener('click',function (event){
    event.preventDefault();
    if(formulario.nome.value.length > 100){
        errors.push('O nome deve ter no máximo 100 caracteres');
        formulario.nome.focus();
        return false;
    }
    if (formulario.email.value.length > 100){
      errors.push("Email com mais de 100 caracteres");
        formulario.email.focus();
        return false;
    }
    if (formulario.telefone.value.length > 15){
      errors.push("Telefone com mais de 15 caracteres");
        formulario.telefone.focus();
        return false;
    }
    if (formulario.mensagem.value.length > 1000){
      errors.push("Mensagem com mais de 1000 caracteres");
        formulario.mensagem.focus();
        return false;
    }
  
    if (formulario.telefone.value.length < 8){
      errors.push("Telefone com menos de 8 caracteres");
        formulario.telefone.focus();
        return false;
    }
    if (isNaN(formulario.telefone.value)){
      errors.push("Telefone deve ser números");
      formulario.telefone.focus();
      return false;
      }
    if(formulario.nome.value === "") {
      errors.push("Campo nome não foi preenchido");
      formulario.nome.focus();
      return false;
    }
    if(formulario.email.value === "") {
      errors.push("Campo email não foi preenchido");
      formulario.email.focus();
      return false;
    }
    if(formulario.telefone.value === "") {
      errors.push("Campo telefone não foi preenchido");
      formulario.telefone.focus();
      return false;
    }
    if(formulario.mensagem.value === "") {
      errors.push("Campo mensagem não foi preenchido");
      formulario.mensagem.focus();
      return false;
    }
    sucess.push("Dados enviados com sucesso!"); 
    contatoController.envioFormulario();
  });         