class ListaNegociacoes {

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
}
