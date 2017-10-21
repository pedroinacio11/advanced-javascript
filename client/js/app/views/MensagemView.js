  class MensagemView extends View{

    // recebi um elemento e uso o super para passar para a classe pai
      constructor(elemento){
        super(elemento);
      }


    template(model){
      // To fazendo um if inline, se o model.texto é diferente de espaco em branco, diferente de 0
      // diferente de null, pois em javascript uma string null é avaliada com false.
      //Se tiver texto devolve o texto com o alert se não devolve o <p> vazio ..
      return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

  }
