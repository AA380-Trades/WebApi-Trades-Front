class Bind{
    //CONSTRUTOR PODE TER RETORNO
    //array ... rest operation parecidocom o spread operation
        constructor(model, view, ...props){
    
            let proxy = ProxyFactory.createProxy(model, props, model=>
            view.update(model));
    
            view.update(model);
    
            return proxy;
    
        }
    }
    