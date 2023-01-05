function currentTime() { //function ID
    const date = new Date(); //define date 'new' today
     let hh = date.getHours(); // define variable 'hh' for hours '.getHours' permanent JS object
     let mm = date.getMinutes(); // define variable 'mm' for minutes
     let ss = date.getSeconds(); // define variable 'ss' for seconds 
    
   
      hh = (hh < 10) ? "0" + hh : hh; //variable less than 10 add 0 in front of var
      mm = (mm < 10) ? "0" + mm : mm; // 00 : 00;
      ss = (ss < 10) ? "0" + ss : ss; // repeat for hour, min and secs
       
      let time = hh + ":" + mm + ":" + ss; //variable 'time' creates a string variables and '+'
   
     document.querySelector(".clock-display").innerText = time;  //selects class "clock display" and text inside
     var t = setTimeout(function(){currentTime()}, 1000); //recursion
 }
 
   
 currentTime();

 function barWidth() { //function ID
    const date = new Date(); //define date new for today
    let ss = date.getSeconds(); //getSecond like above to define ss

    const bar = document.querySelector(".clock-progress-bar"); //select progress bar 
    console.log(bar); 
    bar.style.width = (ss/60)*14 + "rem"; //object to define element width; use var ss/60 (for second %)
    setInterval(function(){barWidth()}, 1000);

 }

 barWidth();

 function changeColor() {
 const color = ["0062ff", "d900ed", "#ed6f00", "ed6f00", "18ed00", "18ed00", "#0096ed"];
 for (let i = 0; i < color.length; i++){

 }

 const hex = "#" + color;

 document.querySelector(".clock").style.backgroundColor = hex;
 var t = setTimeout(function(){changeColor()}, 1000);
 }
 changeColor();