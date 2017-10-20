class ProxyFactory{
    
    static create(objeto, props, acao){
        
        return new Proxy(objeto, {
         //uso o get quando estou lendo um propriedade e set quando estou modificando
         get(target, prop, receiver){
        //Se a propriedade que eu estou varrendo é adiciona ou esvazia e é uma função
            if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])){            
                
                return function(){

                console.log(`interceptando ${prop}`);
                Reflect.apply(target[prop], target, arguments);
                return acao(target);
                }
             }
            return Reflect.get(target, prop, receiver);
            },
            
            set(target, prop, value, receiver){

                if(props.includes(prop)){
                    acao(target);
                    //target(prop) = value;
                }
                return Reflect.set(target, prop, value, receiver);  
            }
        });

    }

    static _ehFuncao(func){
        
                return typeof(func) == typeof(Function);
            }

}