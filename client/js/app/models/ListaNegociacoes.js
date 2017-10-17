class ListaNegociacoes {

  // o armadilha recebe uma função que eu vou guardar para ser chamada dps. Quando eu chamar o adiciona e o esvazia.
  constructor(armadilha) {
      this._negociacoes = [];
      this._armadilha = armadilha;
  }

  adiciona(negociacao){
    this._negociacoes.push(negociacao);
    //o this recebe a propria lista de negociações
    this._armadilha(this);
  }

  get negociacoes(){
    // blindando a lista de negociacoes, não é possivel alterar por exemplo usando o push no meu array
      return [].concat(this._negociacoes);
  }

  esvazia(){

    this._negociacoes = [];
    //o this recebe a propria lista de negociações
    this._armadilha(this);
  }

}
