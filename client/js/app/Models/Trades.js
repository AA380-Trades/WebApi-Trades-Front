class Trades{

    constructor(id,conta,ativo,quantidade,preco,tipoOperacao,data){
         
        this.id = id;
        this.conta = conta;
        this.ativo = ativo;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoOperacao = tipoOperacao;
        this.data =  DateHelper.Data(new Date(data));
    }

    get Id(){

        return this.id;
    }

    get Conta(){
        return this.conta;
    }

    get Ativo(){
        return this.ativo;
    }

    get Quantidade(){
        return this.quantidade;
    }

    get Preco(){
        return this.preco;
    }

    get TipoOperacao(){
        return this.tipoOperacao;
    }
    get Data(){
        return this.data;
    }
}

