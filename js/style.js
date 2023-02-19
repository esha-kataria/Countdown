function countDown() {
    let deadline = new Date("may 09, 2023 12:00:00");
    let now = new Date(); 
    let time = deadline-now;
    let seconds = Math.floor( (time/1000) % 60 );
    let minutes = Math.floor( (time/1000/60) % 60 );
    let hours = Math.floor( (time/(1000*60*60)) % 24 );
    let days = Math.floor( time/(1000*60*60*24) );

    seconds = seconds < 10 ? '0'+seconds : seconds;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    hours = hours < 10 ? '0'+hours : hours;
    days = days < 10 ? '0'+days : days;


    let time1 = days + "  " + hours + "  " + minutes + "  " + seconds;


    document.getElementById("time").innerHTML = time1;  

    if(time <0){
        document.getElementById("display").style.display="none";
        document.getElementById("show").innerHTML="TIME OUT";
    }

}

setInterval('countDown()', 1000);