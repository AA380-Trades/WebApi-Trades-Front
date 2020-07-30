
class HelpFormat{
    
   static  FormatNumber(number){

       return new Intl.NumberFormat('de-DE', { currency: 'BRL'}).format(number);
       
    }
    

}
