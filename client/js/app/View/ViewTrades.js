class ViewTrades extends ViewBase {


    constructor(elemento){
            super(elemento);        
    }

    template(model){
          debugger;
        return  `<div class="table-intraday">
        <table class="table">
          <thead class="thead-light">
            <tr>
              ${this._theadTable(model)}
            </tr>
          </thead>
          <tbody>
            ${this._bodyTable(model)}
          </tbody>
        </table>
      </div>
        `;
    }
    _theadTable(model){
     debugger;
       let thead ='';
                for(var i in model[0]){

                  thead +=`<th scope="col">${i}</th>`;

                }
             
            return thead;            
        
    }

    _bodyTable(model){
      let body ='';
      let tr ='';
      model.forEach(element => {
        for(var value in Object.values(element)){
        body+=  `<td>${Object.values(element)[value]}</td>`;
        }
        tr += `<tr>${body}</tr>`;
        body ='';
      });
      return tr;
        
    }

}