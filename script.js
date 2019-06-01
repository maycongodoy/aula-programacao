var name = prompt('Digite seu nome');
var age = parseInt(prompt(name.concat(', Digite sua idade')));
/*var hasMoney = confirm(' você tem dinheiro?');
console.log (hasMoney);
console.log ('true');
const minimumAge = 21;
if(age >= minimumAge && hasMoney){
  alert('Tem idade mínima e tem dinheiro');
} else{
  alert('falha no processamento');
}
if (age === minimumAge || !hasMoney  ){
  alert('Você tem exatamente a idade necessária ou não tem dinheiro');
}else{
   alert('falha no processamento');
}*/
var isMan = confirm('É homem?');
const serviceAge = 18;

if (isMan) {
  if (age >= serviceAge){
    if (age === serviceAge){
      alert('Bora servir');
    } else {
      alert('Bora servir, mas vai pagar multa');
    }
  } else {
    alert ('espere sua vez');
  }
} else{
  alert('Não é obrigatório servir');
}
