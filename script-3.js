var cueca = 'Red Nose';
var comoda = [true, 5, 3.4, 'Maycon', cueca];
comoda.push('capacete');
comoda.pop();
comoda.slice(0,1);

var pessoa = {
  nome: 'Maycon',
  idade: 26,
  altura: 1.73,
  casado: false,
  posse: ['casa', 'moto', 'cachorro'],
};
console.log(pessoa);
console.log(pessoa.nome);
pessoa.cachorro = {
  nome: 'charlote',
  raca: 'salsicha',
  cor: 'bege',
};
console.log(pessoa.cachorro.nome);
console.log(pessoa.posse[1]);
