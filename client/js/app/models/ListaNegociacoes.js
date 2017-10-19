class ListaNegociacoes {

  // o armadilha recebe uma função que eu vou guardar para ser chamada dps. Quando eu chamar o adiciona e o esvazia.
  constructor() {
      this._negociacoes = [];
  }

  adiciona(negociacao){
    this._negociacoes.push(negociacao);
  }

  get negociacoes(){
    // blindando a lista de negociacoes, não é possivel alterar por exemplo usando o push no meu array
      return [].concat(this._negociacoes);
  }

  esvazia(){

    this._negociacoes = [];
  }

}
