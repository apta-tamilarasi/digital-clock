var date=document.getElementById("date");
var month=document.getElementById("month");
var year=document.getElementById("year");


var hour=document.getElementById("hour");
var minutes=document.getElementById("minute");
var second=document.getElementById("second");


var amandpm=document.getElementById("am/pm");
var pmandam=document.getElementById("pm/am");

var day=document.getElementsByClassName("days");
console.log(day);


var today=new Date();
var todaydate=today.getDate();
var todaymonth=today.getMonth();
var todayyear=today.getFullYear();

console.log(todaydate);

var todayhour=today.getHours();
var todayminute=today.getMinutes();
var todaysecond=today.getSeconds();

console.log(todayhour);

console.log(todayminute);

console.log(todaysecond);


var todayday=today.getDay();

console.log(todayday);




    date.innerHTML=todaydate;
    month.innerHTML=todaymonth+1;
    year.innerHTML=todayyear;

   


    //day set

  day[todayday].style.color="aqua";


/* am and pm set */
    
    if(todayhour<=12){
        amandpm.style.color="aqua";
    }

    else if(todayhour>=12){
        pmandam.style.color="aqua";

    }
    
    

/*  time set */

    
    
    ms=setInterval(timersec,1000);
    
    second.innerHTML=todaysecond;
    minutes.innerHTML=todayminute;
    hour.innerHTML=todayhour;
   
    
    
    function timersec(){


        
        if (9>todaysecond){
    
            todaysecond++;
            second.innerHTML="0"+todaysecond;
          
           
        }
    
        else if (9<=todaysecond && todaysecond<59){
            todaysecond++;
            second.innerHTML=todaysecond;
            
           
        }
        
    
        else{
            clearInterval(todaysecond);
            todaysecond=0;
            if (9>todayminute){
    
                todayminute++;
               minutes.innerHTML="0"+todayminute;
             
              
           }
       
           else if (9<=todayminute && todayminute<59){
            todayminute++;
               minutes.innerHTML=todayminute;
               
              
           }
    
            else{
                clearInterval(minutes);
                todayminute=0;
                if (9>todayhour){
    
                    todayhour ++;
                   hour.innerHTML="0"+todayhour;
                 
                  
               }
           
               else if (9<=c && c<23){
                    todayhour++;
                   hour.innerHTML=todayhour;
                   
                  
               }
                else{
                    clearInterval(hour);
                    todayhour=0;
        
                    
            
                }
    
    
        
            }
        
    
        }
    }
    
    
    
   
