//refactored project 
(function() {      //immediately invoked function expression -> avoid leaking out to global scope - "we are not dirtying up the window object"
    "use strict";       //see notes: helps target 
    
    // to get hours/min/secs
   
   
   const $display = document.querySelector(".clock-display");
   const $progressBar = document.querySelector(".clock-progress-bar");
   const $clock = document.querySelector(".clock");

   let isHovering = false;

   $clock.addEventListener('mouseover', function () {
    isHovering = true;
   }); 

   $clock.addEventListener('mouseout', function () {
    isHovering = true;
   }); 
   
   setInterval(funciton () {

       const currentTime = new Date();
       // console.log(currentTime);  // to get hours/min/secs
   

$display.textContent = `${hour}:${minutes}:${seconds}`; //back tics allow us to concatinate and turn into string interprolation

   }, 1000);

   console.log(ss/60) //check math
   $progressBar.getElementsByClassName.width = `${(seconds / 60) * 14}rem`;//string for width by targetting width
    $display.textContent =`${hour}:${minutes}:${seconds}`;
}, 1000);
   

if (isHovering) {
const secondsHex = currentTime.getSeconds().toString(16)).slice(-2);
//...
//...
console.log(secondsHex, minutesHex, hourHex);
console.log(typeof secondsHex);
} else {
        // console.log(currentTime);  // to get hours/min/secs
    const ss = ("0" + currentTime.getSeconds()).slice(-2);
       const mm = ("0" + currentTime.getMinutes()).slice(-2);
       const hh = ("0" + currentTime.getHours()).slice(-2);
      // console.log(hour, minutes, seconds);

}

$progressBar.style.width = `${(seconds / 60) * 14}rem`;
$display.textContnet = '${hour}:${minutes}:${seconds}'



})();


   //scope: what values/variables do I have access do w/i this section of code 
   //use parseInt() toString method
   //for hex: 16