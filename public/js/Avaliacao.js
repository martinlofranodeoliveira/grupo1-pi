
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


