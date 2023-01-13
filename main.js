//refactored project 
//(function() {   
       //immediately invoked function expression -> avoid leaking out to global scope - "we are not dirtying up the window object"
    //"use strict";       //see notes: helps target 

    
function time() {
   
    //var $display = document.querySelector(".clock-display");
    
    //var $clock = document.querySelector(".clock");

    var currentTime = new Date();
    var seconds = currentTime.getSeconds();
    var minutes = currentTime.getMinutes();
    var hour = currentTime.getHours();


    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var timeNow = hour + ":" + minutes + ":" + seconds;

   document.querySelector(".clock-display").innerText = timeNow; 


};

time();
setInterval(function(){time()}, 1000); //updates clock display every second with time




function clockArr() { //function to obtain array for hex color

   var currentTime = new Date();
   var seconds = currentTime.getSeconds();
   var minutes = currentTime.getMinutes();
   var hour = currentTime.getHours();


   hour = (hour < 10) ? "0" + hour : hour;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;

  // var timeNow = hour + ":" + minutes + ":" + seconds; 

   var arr=[hour,minutes,seconds].map(function(num){
      return (num<10) ? '0'+num : String(num)
   });

   hour=arr[0];
   minutes=arr[1];
   seconds=arr[2];
   return hour + ':' +  minutes + ':' + seconds; 
};


function output(clockArr){
   var color= '# ' + clockArr;
   document.body.bgColor=color;
   //>>having trouble targeting the background of the css object clock bg 

   //document.querySelector(".clock") = colorOfClock;
};

setInterval(function(){ 
	output(clockArr() )} , 1000 );





function progressBar() { //function to change progress bar length
   var currentTime = new Date();
   var seconds = currentTime.getSeconds();
   let bar = document.querySelector(".clock-progress-bar");
   bar.style.width = (seconds/60)*14 + "rem";
};

progressBar();
setInterval(function(){progressBar()}, 1000); //updates clock display every second with line width








