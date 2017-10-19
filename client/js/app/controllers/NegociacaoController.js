class NegociacaoController {

  constructor() {

    //Usei a chamada bind para usar o dolar como referencia para o document, permitindo assim uma sintax
    // parecida com jQuery porém naõ verbosa.
    let $ = document.querySelector.bind(document);

    // buscando elementos do DOM
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    let self = this;
    this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
      
              //uso o get quando estou lendo um propriedade e set quando estou modificando
             get: function(target, prop, receiver){
                 
              //Se a propriedade que eu estou varrendo é adiciona ou esvazia e é uma função
              
              /**
               * O que ta rolando aqui embaixo? rs
               * Fiz lista.adiciona ... quando eu fiz lista.adiciona (lembre-se que métodos e funções o proxy
               * sempre entende que é um get, pq ele sempre chama um get pra dps fazer um apply então vai cair no get)
               * o que o if faz? --> Você está na minha lista de coisas que eu quero interceptar (no caso adiciona e esvazia)
               * e é uma função? se sim, eu vou te substituir (o adiciona ou esvazia) por um nova função, dai quando
               * a função adiciona for chamada ela vai imprimir console.log interceptado por prop ... 
               * pq a funçaõ vai lembrar do contexto de execução dela, ela vai lembrar quem é prop do console, que é 
               * a propriedade que está sendo acessada no momento. Com o Reflect.apply faço a funçaõ receber os 
               * parametros delal, pq arguments é uma variavel implicita que me dá acesso a todos os parametros da 
               * função(new Negociacao(new Date(), 1, 100)) qunado ela é chamada .. 
               * 
               * Com isso eu consigo saber quem eu quero interceptar e dps executar um código! 
               * 
               * O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.
               * O prop é a propriedade em si, que está sendo lida naquele momento.
               * O receiver é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas.
               */ 

                  if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) == typeof(Function)){
                      
                      return function(){
                          console.log(`interceptando ${prop}`);
                          Reflect.apply(target[prop], target, arguments);
                          self._negociacoesView.update(target);
                      }
                  }
      
                  return Reflect.get(target, prop, receiver);
             } 
      
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
