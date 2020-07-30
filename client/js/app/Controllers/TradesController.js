class TradesController {

    constructor(){

        debugger;
        let $ = document.querySelector.bind(document);
        this._formTrades = $('.viewTrades');
        this._viewTrades = new ViewTrades(this._formTrades);
        this._listTrades =  new ListTrades();
        this._getTrades();

    }

    viewConsulta(modelTable){
        debugger;
        let listTradesGeneric = this._mathTrades(modelTable);
       this._viewTrades.update(listTradesGeneric);
    }

    _getTrades(){

debugger;
      
       new ServiceTrades()
        .obterTrades()
        .then(trades => trades.forEach(trade => {
           // debugger;
            this._listTrades.adiciona(trade)
        }))
        .catch(erro =>
            console.log(erro));

    }

    _mathTrades(modelTable){

        switch(modelTable) { 

            case "Conta" : {   
                return this._contaMath();
           }   
           case "Tipo de Operação" : {   
              return this._tipoOperacaoMarh();
           }   
           case "Ativo" : {   
            return this._ativoMath();
           }         
           default: {   
              return this._listTrades.getTrades;   
           }   
        } 
    }

    _ativoMath(){
        var resultado = [];

        this._listTrades.getTrades.reduce(function(novo, item) {
          if (!novo[item.Ativo]) {
            novo[item.Ativo] = {
              Ativo: item.Ativo,
              Quantidade: 0,
              Preco:0,
              Media:0
            };
        
            resultado.push(novo[item.Ativo]);
          }
        
          novo[item.Ativo].Quantidade += item.Quantidade;
          novo[item.Ativo].Preco += item.Preco;
          novo[item.Ativo].Media = ((novo[item.Ativo].Preco*novo[item.Ativo].Quantidade)/
          ( novo[item.Ativo].Quantidade));
          return novo;
        }, {});
        
      

        return this._formatValues(resultado);
        

    }

    _tipoOperacaoMarh(){

        var resultado = [];

        this._listTrades.getTrades.reduce(function(novo, item) {
          if (!novo[item.TipoOperacao]) {
            novo[item.TipoOperacao] = {
              Operacao: item.TipoOperacao,
              Quantidade: 0,
              Preco:0,
              Media:0
            };
        
            resultado.push(novo[item.TipoOperacao]);
          }
          debugger;
          novo[item.TipoOperacao].Quantidade += item.Quantidade;
          novo[item.TipoOperacao].Preco += item.Preco;
          novo[item.TipoOperacao].Media = (novo[item.TipoOperacao].Preco*novo[item.TipoOperacao].Quantidade)/
          ( novo[item.TipoOperacao].Quantidade);

          return novo;
        }, {});
        return this._formatValues(resultado);

    }

    _contaMath(){
        
        var resultado = [];

        this._listTrades.getTrades.reduce(function(novo, item) {
          if (!novo[item.Conta]) {
            novo[item.Conta] = {
              Conta: item.Conta,
              Quantidade: 0,
              Preco:0,
              Media:0
            };
        
            resultado.push(novo[item.Conta]);
          }
        
          novo[item.Conta].Quantidade += item.Quantidade;
          novo[item.Conta].Preco += item.Preco;
          novo[item.Conta].Media = ((novo[item.Conta].Preco*novo[item.Conta].Quantidade)/
          ( novo[item.Conta].Quantidade));
          return novo;
        }, {});
        
        return this._formatValues(resultado);

    }

    _formatValues(resultado){
      resultado.forEach(x =>{
        x.Media = HelpFormat.FormatNumber(x.Media),
        x.Preco = HelpFormat.FormatNumber(x.Preco)
      });

      resultado.sort((a,b) => {
        return a.Ativo - b.Ativo});
      debugger;
         return resultado;
    }

    exportFile(format,modelTable){
     debugger;
     let listTradesGeneric =  this._mathTrades(modelTable);
        var wb = XLSX.utils.book_new();

        wb.Props = {
                Title: "Ubs Trades",
                Subject: "Trade",
                Author: "Henrique Santos",
                CreatedDate: new Date(2017,12,19)
        };
        
        wb.SheetNames.push("UBS Trades");
       var ws_data = [];
        let headFile = [];
       for(let header in listTradesGeneric[0]){
            headFile.push(header);
       }

         ws_data.push(headFile);

         var convertida = listTradesGeneric.map(function(obj) {
            return Object.keys(obj).map(function(chave) {
                return obj[chave];
            });
        });
        

        ws_data.push(...convertida);
        console.log(ws_data);
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["UBS Trades"] = ws;

        var wbout = XLSX.write(wb, {bookType: format,  type: 'binary'});
        function s2ab(s) {
  
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
                
        }
                saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), `Trdaes.${format}`);
    }
}