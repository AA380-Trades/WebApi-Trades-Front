class HttpService{
   
    _handleError(res){
         debugger;
        if(res.ok)
           return res;
        throw new Error(res.statusText);
  
     }
       get(url){
  
        return new  Promise((resolve, reject) => {
            
            
          let xhr = new XMLHttpRequest();
        
          
          xhr.open('GET',url,true);
       debugger;
         
         xhr.onreadystatechange = () => {
          
            if(xhr.readyState == 4){
           
                   if(xhr.status == 200){
      
                    console.log('Obtendo reposta do servidor');
      
                   resolve(JSON.parse(xhr.responseText));
      
                   }else{
      
                      reject(xhr.responseText);
                    
                    }
          
                }
      
      
         };
          xhr.send();

       });

       }
}