//pegando os campos do meu index.hmtl

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

/*selecionando a classe form dentro do index
Para esse elemento do DOM que eu peguei, add um evento que é o submit
E quando esse evento for disparado chama um evento de callback que vai ser acionado no submit */
document.querySelector('.form').addEventListener('submit', function(event){

  /* Por padrão quando uso o submit ele recarrega a pagina e ai eu perco meus de dados,
   estou usando o preventDefault para evitar isso. */
  event.preventDefault();
  // criando uma TR dinamicamente
  var tr = document.createElement('tr');

  //Iterando com forEach
  campos.forEach( function(campo) {

    var td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);

  });

  var tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);
  tbody.appendChild(tr);

  //Limpando os campos para o usuario
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;

  campos[0].focus();

});
