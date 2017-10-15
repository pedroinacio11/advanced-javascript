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

    let negociacao = new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputData.value,
        this._inputValor
      );

      console.log(negociacao);
      console.log(DateHelper.dataParaTexto(negociacao.data));

    }
}
