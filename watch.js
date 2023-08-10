let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

//STOPWATCH START STOP RESET FUNCTION:
function StopWatch(){
    if(timer == true){
        count = count + 1;

        if(count == 99){
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
 
          //CONVERTED INTO STRINGS " " S = string...

        let hrS = hr;
        let minS = min;
        let secS = sec;
        let countS = count;

        if(hr < 10){
            hrS = "0" + hrS;
        }
        if(min < 10){
            minS = "0" + minS;
        }if(sec < 10){
            secS = "0" + secS;
        }if(count < 10){
            countS = "0" + countS;
        }

        document.getElementById("hour").innerHTML = hrS;
        document.getElementById("minute").innerHTML = minS;
        document.getElementById("second").innerHTML = secS;
        document.getElementById("milliseconds").innerHTML = countS;
       
        setTimeout( "StopWatch()" ,10);
    }    
} 

function start(){
    timer = true;
    StopWatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("milliseconds").innerHTML = "00";
}


