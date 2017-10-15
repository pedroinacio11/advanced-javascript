class DateHelper {

  constructor(){

    throw new Error('Esta classe não pode ser instanciada');

  }

  static dataParaTexto(data){
    // estou usando templateString, não preciso concatenar usanado +
      return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

  static textoParaData(texto){

    //Expressão regular - Numero de 4 dig ... + Numero de 2 digitos ...
    if(!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw Error('Deve estar no formato aaaa-mm-dd');

    //tranformando nossa string num array e nesse array realizar o ajuste através da função map
           return new Date(...texto.split('-')
           // utilizei a arrowFunction, quando essa arrowFunction só tem uma instrução eu não preciso passar
           // um bloco, podendo omitir o return sempre trazendo o valor --> item - indice % 2
           .map((item, indice) => item - indice % 2))
    }
}
