var eleitores = [
  {
    nome: 'Maycon',
    titulo: '123',
  },
  {
    nome: 'william',
    titulo: '133',
  },
  {
    nome: 'Balassa',
    titulo: '134',
  },
  {
    nome: 'Guilherme',
    titulo: '122',
  },
  {
    nome: 'Douglas',
    titulo: '135',
  },
];
var titulo = prompt('Digite seu titulo');
var eleitor = eleitores.find(function(elemento){
  return elemento.titulo === titulo;
});

if(eleitor) {
  var candidatos = [
    {
      nome: 'Bolsonaro',
      numero: '17',
    },
    {
      nome: 'Marina',
      numero: '19',
    },
    {
      nome: 'Ciro',
      numero: '12',
    },
    {
      nome: 'Haddad',
      numero: '13',
    },
  ];
  var voto = prompt(eleitor.nome + ' Qual é o seu voto');
  var candidato = candidatos.find(function(elemento){
    return elemento.numero === voto;
  });
  if(candidato){
    alert('Voce votou em ' + candidato.nome);
  }else{
    alert('Você votou em branco');
  }
} else{
  alert('Não encontrado');
};
