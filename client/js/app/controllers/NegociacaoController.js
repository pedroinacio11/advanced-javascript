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

    importaNegociacoes(){

      //crio uma instancia de XMLHTTPRequest
      let xhr = new XMLHttpRequest();

      //Indico qual endereço quero acessar (se não for local precisa do endereço completo)
      xhr.open('GET', 'negociacoes/semana');

      /* Configurações dessa minha requisição Ajax */
      /* Eu preciso saber qual estado eu estou quando onreadystatechange for chamado */
      xhr.onreadystatechange = () => {

        /*
        ESTADOS DE UMA REQUISIÇÃO AJAX
        0: requisição ainda não iniciada
        1: conexão com servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição concluida e a resposta esta pronta
        */

        if(xhr.readyState == 4 ){

          if(xhr.status == 200){
            console.log('Obtendo as negociações do servidor');

            JSON.parse(xhr.responseText) // fiz o parse que vai tranformar num array de objetos ..
            /*Eu precorro cada array de objetos para criar um novo array, 
            onde cada objeto desse eu instancio uma nova negociação*/
                .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))
                //agora dessa lista que eu criei com o map -- iitero sobre ela e adiciona cada item na minha lista de 
                // negociações ... 
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';

          }else {
            console.log(xhr.responseText);
            this._mensagem.texto = 'Não foi possivel obter as negoaciações da semana.';
          }
        }
      };

      //E Envio
      xhr.send();

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
