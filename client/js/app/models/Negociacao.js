class Negociacao {

  //Definindo os atributos da minha classe com constructor
  constructor(data, quantidade, valor){

  /* quando uso _ (underline) é uma convençaõ para o
  programador dizendo que essas propriedades só podem ser acessadas pelos proprios métodos da classe.
  Ninguem de fora pode acessa-los!!! Para isso foi criado o getters para serem acessadas de fora */
      this._data = new Date(data.getTime());
      this._quantidade = quantidade;
      this._valor = valor;
  // "congelando" um objeto e com isso, qualquer alteração nas suas propriedades será ignorada;
  // Pois pela regra de negocio desse sistema uma negociação não pode ser alterada dps de criada;
      Object.freeze(this);

  }

  get obtemVolume(){
    return this._quantidade * this._valor;

  }

  get data(){
    return new Date(this._data.getTime());
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

}
