class NegociacaoController {

  constructor() {

    //Usei a chamada bind para usar o dolar como referencia para o document, permitindo assim uma sintax
    // parecida com jQuery porém naõ verbosa.
    let $ = document.querySelector.bind(document);

    // buscando elementos do DOM
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
    
    //Fazendo um bindig da minha lista de negociações com a minha view e a minah view só vai ser atualizada
    //se alguem chamar o adiciona ou esvazia do meu modelo.
    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(), 
      new NegociacoesView($('#negociacoesView')),
      'adiciona', 'esvazia')
    
    this._mensagem = new Bind(new Mensagem(),
    new MensagemView($('#mensagemView')),
    'texto');

  }

  adiciona(event){

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criarNegociacao());
    this._mensagem.texto = 'Negociacao adicionada com sucesso';
    this._limpaFormulario();
    }

    apaga(){

      this._listaNegociacoes.esvazia();
      this._mensagem.texto = 'Negociações apagadas com sucesso';

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
