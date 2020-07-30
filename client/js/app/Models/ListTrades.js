class ListTrades{

    constructor(){

        this._lisTrades =[];
    }

    adiciona(trades){
        
        this._lisTrades.push(trades);
    }

    get getTrades(){

        return [].concat(this._lisTrades);
    }
}