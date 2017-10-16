class View {

  // extraindo tudo que é comum entre as classes MensagemView e NegociacoesView

    constructor(elemento) {
      this._elemento = elemento;
    }

    template(){
        throw new Error('O método template deve ser implementado');
    }

    update(model){
      this._elemento.innerHTML = this.template(model);
    }
  }
