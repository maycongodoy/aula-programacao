var name = 'visitante';
var age;
var age2;
var weight = 90.03;
var hasMoney = true;
const babyGay = 'Mouse';
//alert('Olá ' + name);
//alert(name);
name = prompt('Qual seu nome');
age = parseInt(prompt('Qual sua idade?'));
const idadePermitida = 25;
//alert('Olá' + name);
/*
if(age < age2){
  alert('iguais do jeito errado');
} else {
  alert('diferentes do jeito errado');
}

if(age === age2){
  alert('iguais do jeito certo');
} else {
  alert('diferentes do jeito certo');
}
*/
if(age !== idadePermitida){
  alert('sem permissão');
} else{
  alert('permissão');
}
