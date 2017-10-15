class DateHelper {

  constructor(){

    throw new Error('Esta classe não pode ser instanciada');

  }

  static dataParaTexto(data){
    // estou usando templateString, não preciso concatenar usanado +
      return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

  static textoParaData(texto){
    //tranformando nossa string num array e nesse array realizar o ajuste através da função map
           return new Date(...texto.split('-')
           // utilizei a arrowFunction, quando essa arrowFunction só tem uma instrução eu não preciso passar
           // um bloco, podendo omitir o return sempre trazendo o valor --> item - indice % 2
           .map((item, indice) => item - indice % 2))
    }
}
