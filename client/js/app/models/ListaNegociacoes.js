class ListaNegociacoes {

  // o armadilha recebe uma função que eu vou guardar para ser chamada dps. Quando eu chamar o adiciona e o esvazia.
  constructor() {
      this._negociacoes = [];
  }

  adiciona(negociacao){
    //gamb old -- > this._negociacoes = [].concat(this._negociacoes, negociacao);
    this._negociacoes.push(negociacao);
  }

  get negociacoes(){
    // blindando a lista de negociacoes, não é possivel alterar por exemplo usando o push no meu array
      return [].concat(this._negociacoes);
  }

  esvazia(){

    this._negociacoes = [];
  }

  get volumeTotal() {
    return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
 }

 ordena(criterio) {
  this._negociacoes.sort(criterio);        
}

inverteOrdem() {
  this._negociacoes.reverse();
}

}
