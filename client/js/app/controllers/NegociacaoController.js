class NegociacaoController {

  constructor() {

    //Usei a chamada bind para usar o dolar como referencia para o document, permitindo assim uma sintax
    // parecida com jQuery porém naõ verbosa.
    let $ = document.querySelector.bind(document);

    // buscando elementos do DOM
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    /* o model é a instância da lista de negociacoes que vai ser passada para a função quando ela for chamada
    this é o meu NegociacaoController
    Pq passei meu NegociacaoController? Pq eu tenho que executar essa função no contexto de NegociacaoController
    Para isso preciso passa-la como parametro para onde realmente ela sera executada que é no ListaNegociacoes
    Usei o Reflect.apply(this._armadilha, this._contexto, [this]); */
    this._listaNegociacoes = new ListaNegociacoes(this, function(model){

      this._negociacoesView.update(model);

    });

    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));
    this._mensagemView.update(this._mensagem);

  }

  adiciona(event){
    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criarNegociacao());

    this._mensagem.texto = 'Negociacao adicionada com sucesso';
    this._mensagemView.update(this._mensagem);

    this._limpaFormulario();
    }

    apaga(){

      this._listaNegociacoes.esvazia();

      this._mensagem.texto = 'Negociações apagadas com sucesso';
      this._mensagemView.update(this._mensagem);

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
