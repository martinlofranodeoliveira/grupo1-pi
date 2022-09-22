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


/* avaliação javascript */
function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("descricao-produto.html");
    url = url[0];
   
    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
   
   
   if (estrela == 5){ 
    if (s5 == url + "images/estrela.png") {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela-fundo.png";
    document.getElementById("s3").src = "images/estrela-fundo.png";
    document.getElementById("s4").src = "images/estrela-fundo.png";
    document.getElementById("s5").src = "images/estrela-fundo.png";
    } else {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela-fundo.png";
    document.getElementById("s3").src = "images/estrela-fundo.png";
    document.getElementById("s4").src = "images/estrela-fundo.png";
    document.getElementById("s5").src = "images/estrela.png";
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4 == url + "images/estrela.png") {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela-fundo.png";
    document.getElementById("s3").src = "images/estrela-fundo.png";
    document.getElementById("s4").src = "images/estrela-fundo.png";
    document.getElementById("s5").src = "images/estrela.png";
    } else {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela-fundo.png";
    document.getElementById("s3").src = "images/estrela-fundo.png";
    document.getElementById("s4").src = "images/estrela.png";
    document.getElementById("s5").src = "images/estrela.png";
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3 == url + "images/estrela.png") {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela-fundo.png";
    document.getElementById("s3").src = "images/estrela-fundo.png";
    document.getElementById("s4").src = "images/estrela.png";
    document.getElementById("s5").src = "images/estrela.png";
    } else {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela-fundo.png";
    document.getElementById("s3").src = "images/estrela.png";
    document.getElementById("s4").src = "images/estrela.png";
    document.getElementById("s5").src = "images/estrela.png";
   }}
    
   //EST
   if (estrela == 2){ 
    if (s2 == url + "images/estrela.png") {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela-fundo.png";
    document.getElementById("s3").src = "images/estrela.png";
    document.getElementById("s4").src = "images/estrela.png";
    document.getElementById("s5").src = "images/estrela.png";
    } else {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela.png";
    document.getElementById("s3").src = "images/estrela.png";
    document.getElementById("s4").src = "images/estrela.png";
    document.getElementById("s5").src = "images/estrela.png";
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1 == url + "images/estrela.png") {
    document.getElementById("s1").src = "images/estrela-fundo.png";
    document.getElementById("s2").src = "images/estrela.png";
    document.getElementById("s3").src = "images/estrela.png";
    document.getElementById("s4").src = "images/estrela.png";
    document.getElementById("s5").src = "images/estrela.png";
    } else {
    document.getElementById("s1").src = "images/estrela.png";
    document.getElementById("s2").src = "images/estrela.png";
    document.getElementById("s3").src = "images/estrela.png";
    document.getElementById("s4").src = "images/estrela.png";
    document.getElementById("s5").src = "images/estrela.png";
    }}}




  
let count = 1;

document.getElementById('radio1').checked = true
setInterval(function(){
  nextName()
},5000)

function nextName(){
  count++
  if(count>3){
    count = 1;
  }
  document.getElementById('radio'+count).checked = true

}
