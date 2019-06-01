/*
var cod = prompt('Digite o código');
switch(cod) {
  case '1':
    alert('Maçã');
    break;
  case '2':
    alert('banana');
    break;
  case '3':
    alert('Pêra');
    break;
  case '4':
    alert('Uva');
    break;
  case '5':
    alert('Melão');
    break;
  default:
    alert('Produto não encontrado');
    break;
}
*/
var podeVotar = false;
var tit = prompt('Digite seu título');

switch(tit) {
  case '101':
    alert('João');
    podeVotar = true;
    break;
  case '102':
    alert('Maria');
    podeVotar = true;
    break;
  case '103':
    alert('Paulo');
    podeVotar = true;
    break;
  case '104':
    alert('Maycon');
    podeVotar = true;
    break;
  case '105':
    alert('Pedro');
    podeVotar = true;
    break;
  default:
    alert('Você não é dessa sessão ou não esta cadastrado');
    break;

}

if (podeVotar){
  var voto = prompt('Digite seu voto');

  switch (voto) {
    case '17':
      alert('Bolsonaro');
      break;
    case '13':
      alert('Haddad');
      break;
    case '12':
      alert('Ciro chapado');
      break;
    default:
      alert('Nulo');
      break;

  }
}
