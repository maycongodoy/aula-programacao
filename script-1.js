var prod1 = 'maçã';
var prod2 = 'uva';
var prod3 = 'banana';
var prod4 = 'laranja';
var prod5 = 'côco';

var cod = prompt('Digite o código');

if (cod === '1') {
  alert(prod1);
} else if (cod === '2') {
   alert(prod2);
} else if (cod === '3') {
  alert(prod3);
} else if(cod === '4'){
  alert(prod4);
} else if (cod === '5'){
  alert(prod5);
} else {
  alert ('Produto não cadastrado');
}
