class DateHelper{

    static Data(data){
    
        return `${data.getMonth()}/${data.getDate()}/${data.getFullYear()}   ${DateHelper._format(data.getHours())}:${DateHelper._format(data.getMinutes())}: ${DateHelper._format(data.getSeconds())}`
    }

   static  _format(timeStamp){

        return timeStamp < 10 ? `0${timeStamp}` : timeStamp;
    }
}