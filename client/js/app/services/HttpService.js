class HttpService {

    get(url){

        return new Promise((resolve, reject) =>{
            
            let xhr = new XMLHttpRequest();
            
                  //Indico qual endereço quero acessar (se não for local precisa do endereço completo)
                  xhr.open('GET', url);
                  xhr.onreadystatechange = () => {
      
                    if(xhr.readyState == 4 ){
            
                      if(xhr.status == 200){
                        console.log('Obtendo as negociações do servidor');
            
                        resolve(JSON.parse(xhr.responseText));
                      }else {
                        reject(xhr.responseText);
                      }
                    }
                  };

                  //E Envio
                  xhr.send();

        });
    }
}





