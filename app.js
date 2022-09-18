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

// Close the sidebar with the close button 
function consult_close() {
    mySidebar.style.display = "none";

}


