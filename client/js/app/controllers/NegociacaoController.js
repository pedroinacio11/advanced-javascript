class NegociacaoController {

  constructor() {

    //Usei a chamada bind para usar o dolar como referencia para o document, permitindo assim uma sintax
    // parecida com jQuery porém naõ verbosa.
    let $ = document.querySelector.bind(document);

    // buscando elementos do DOM
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#negociacoesView'));

    this._negociacoesView.update();

  }

  adiciona(event){
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criarNegociacao());
    this._limpaFormulario();
    }

  _criarNegociacao(){

      return new Negociacao(
    DateHelper.textoParaData(this._inputData.value),
    this._inputQuantidade.value,
    this._inputValor.value);

    }

    _limpaFormulario() {

    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputQuantidade.focus();

    }

}
