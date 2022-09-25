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
