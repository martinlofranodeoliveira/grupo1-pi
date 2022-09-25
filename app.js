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



  
