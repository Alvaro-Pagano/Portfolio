const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("Mins");
const secondsEl = document.getElementById("seconds");




const newYears =  "1 Jan 2023";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const TotalSeconds = ( newYearsDate - currentDate  ) / 1000;

    const days = Math.floor(TotalSeconds / 3600 / 24);

    const hours = Math.floor(TotalSeconds / 3600) % 24  // (TotalSecons/3600) % 24
                                                        // retorna el sobrante de dividir 
                                                        //Totalseconds/3600 
                                                        //en porciones enteras de 24
    
    const Mins = Math.floor (TotalSeconds /60) % 60;
    const seconds = Math.floor (TotalSeconds  % 60); 
    
    daysEl.innerHTML = formatTime(days); 
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(Mins);
    secondsEl.innerHTML = formatTime(seconds);
     

    function formatTime (time) { return time < 10 ? ( `0${
        time}`): time; }
                           // function formatTime ejecutado despues 
                            //del inner.HTML con cada una de las etiquetas 
                            //añade un digito a cada una de ellas ejmp 08 seg  

}

// initial call;

countdown()
setInterval(countdown, 1000);


  
