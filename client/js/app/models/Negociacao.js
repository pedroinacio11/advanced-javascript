class Negociacao {

  //Definindo os atributos da minha classe com constructor
  constructor(data, quantidade, valor){

  /* quando uso _ (underline) é uma convençaõ para o
  programador dizendo que essas propriedades só podem ser acessadas pelos proprios métodos da classe.
  Ninguem de fora pode acessa-los!!! Para isso foi criado o getters para serem acessadas de fora */
      this._data = data;
      this._quantidade = quantidade;
      this._valor = valor;
  }

  get obtemVolume(){

    return this._quantidade * this._valor;

  }

  get data(){
    return this._data;
  }

  get quantidade(){
    return this._quantidade;
  }

  get valor(){
    return this._valor;
  }

}
