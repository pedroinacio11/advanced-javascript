class NegociacaoController {

  constructor() {

    //Usei a chamada bind para usar o dolar como referencia para o document, permitindo assim uma sintax
    // parecida com jQuery porém naõ verbosa.
    let $ = document.querySelector.bind(document);

    // buscando elementos do DOM
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event){

    event.preventDefault();

    // O formato do Date começa do 0 ao 11, ou seja Janeiro é igual ao mês 0 ..
    let data = new Date(
      //Os ... me permite passar um array como parametro para um construtor de uma classe ou uma função..
      //Mas quando uso o ... quero dizer que o primeiro item do array vai ser um parametro
      // passado para esse construtor e assim por diante.
      ...this._inputData.value
      //tranformando nossa string num array e nesse array realizar o ajuste através da função map
             .split('-')
             // utilizei a arrowFunction, quando essa arrowFunction só tem uma instrução eu não preciso passar
             // um bloco, podendo omitir o return sempre trazendo o valor --> item - indice % 2
             .map((item, indice) => item - indice % 2)
           );

           let negociacao = new Negociacao(
             data,
             this._inputData.value,
             this._inputValor
           );

           let diaMesAno = negociacao.data.getDate()
              + '/' + (negociacao.data.getMonth() + 1)
              + '/' + negociacao.data.getFullYear();

           console.log(diaMesAno);
    }
}
