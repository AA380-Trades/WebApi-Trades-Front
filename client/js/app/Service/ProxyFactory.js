class ProxyFactory{

    static createProxy(objeto, props, acao){
     
        return  new Proxy(objeto,{
    
                    get: function(target, prop, receiver){
    //codigo para saber se é função
                        if(props.includes(prop) &&  ProxyFactory._ehFuncao(target[prop])) {
    
                        return function(){
    
                            console.log(`Interceptando ${prop}`);
                          let retorno =   Reflect.apply(target[prop], target, arguments);
                            acao(target);
                           return retorno;  
                       }
    
                    }
    
                    return Reflect.get(target, prop,receiver);
                    },
                    
                    set(target, prop, value, receiver){
                    
                    let retorno = Reflect.set(target, prop, value, receiver);
                    if(props.includes(prop)) acao(target);
                       
                        return  Reflect.set(target, prop, value, receiver);
                        
                    }
            });
       }
    
       static _ehFuncao(func){
    
         return typeof(func) == typeof(Function);
        
    }
}