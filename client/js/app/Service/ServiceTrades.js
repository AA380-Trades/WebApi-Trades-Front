class ServiceTrades{

    constructor(){
        this.http = new HttpService();

    }

    obterTrades(){
        debugger;
        return new Promise((resolve, reject)=>{
           this.http.
            get('http://localhost:49477/api/trades')
            .then(negociacoes => {
               resolve(negociacoes.map(object => new Trades(object.id,object.conta,object.ativo,
                object.quantidade,object.preco, object.tipoOperacao,object.dateTime)));
                 debugger;  
               console.log(object);
            }).catch(erro=>{
               console.log(erro);
        
              reject('Favor chame O Administrador')});    
        
           });
    }
}