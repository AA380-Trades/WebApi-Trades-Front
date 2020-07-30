class ViewBase{


    constructor(elemento){
         
        this._elemento = elemento;
    }

    update(model, modelTable){
         
          this._elemento.innerHTML = this.template(model);
    }
}