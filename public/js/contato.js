
// Criação do evento no botão Formulário de Contato
 document.querySelector('.botaoEnviaForm').addEventListener('click',function (event){
    event.preventDefault();
    if(formulario.nome.value.length > 100){
        alert("Nome com mais de 100 caracteres");
        formulario.nome.focus();
        return false;
    }
    if (formulario.email.value.length > 100){
        alert("Email com mais de 100 caracteres");
        formulario.email.focus();
        return false;
    }
    if (formulario.telefone.value.length > 15){
        alert("Telefone com mais de 15 caracteres");
        formulario.telefone.focus();
        return false;
    }
    if (formulario.mensagem.value.length > 1000){
        alert("Mensagem com mais de 1000 caracteres");
        formulario.mensagem.focus();
        return false;
    }
  
    if (formulario.telefone.value.length < 8){
        alert("Telefone com menos de 8 caracteres");
        formulario.telefone.focus();
        return false;
    }
    if (isNaN(formulario.telefone.value)){
      alert("Telefone deve ser números");
      formulario.telefone.focus();
      return false;
      }
    if(formulario.nome.value === "") {
      alert("Campo nome não foi preenchido");
      formulario.nome.focus();
      return false;
    }
    if(formulario.email.value === "") {
      alert("Campo email não foi preenchido");
      formulario.email.focus();
      return false;
    }
    if(formulario.telefone.value === "") {
      alert("Campo telefone não foi preenchido");
      formulario.telefone.focus();
      return false;
    }
    if(formulario.mensagem.value === "") {
      alert("Campo mensagem não foi preenchido");
      formulario.mensagem.focus();
      return false;
    }
    alert("Dados enviados com sucesso!"); 
    // return true;
  });   