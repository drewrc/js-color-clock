//refactored project 
//(function() {   
       //immediately invoked function expression -> avoid leaking out to global scope - "we are not dirtying up the window object"
    //"use strict";       //see notes: helps target 
    
    // to get hours/min/secs
   
   
    const $display = document.querySelector(".clock-display");
    const $progressBar = document.querySelector(".clock-progress-bar");
    const $clock = document.querySelector(".clock");
    const currentTime = new Date();
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();


    // seconds = (seconds < 10) ? "0" + seconds : seconds;
    //("0" + currentTime.getSeconds()).slice(-2);
   //  minutes = (minutes < 10) ? "0" + minutes : minutes;
    //("0" + currentTime.getMinutes()).slice(-2);
    //hour = (hour < 10) ? "0" + hour : hour;
    //("0" + currentTime.getHours()).slice(-2);
    //let time = hour + ":" + minutes + ":" + seconds;
    //$display = setInterval (time.innerText, 1000);
    //time = $display;

    setInterval($display.textContent = `${hour}:${minutes}:${seconds}`, 1000);
    setInterval($progressBar.style.width = `${(seconds / 60) * 14}rem`, 1000);


   //$display.textContent = `${hour}:${minutes}:${seconds}`;
   //$progressBar.getElementsByClassName.width = `${(seconds / 60) * 14}rem`;
   //const bananana = setTimeout(banana, 1000);
   


    let isHovering = false;
 
    $clock.addEventListener('mouseover', function() {
     isHovering = true;
    }); 
 
    $clock.addEventListener('mouseout', function() {
     isHovering = true;
    }); 
    
// console.log(currentTime);  // to get hours/min/secs
 //    setInterval (time.innerHTML, 1000); //back tics allow us to concatinate and turn into string interprolation


    
 
 if (isHovering) {
     let secondsHex = (currentTime.getSeconds().toString(16)).slice(-2);
     let minutesHex = (currentTime.getMinutes().toString(16)).slice(-2);
     let hourHex = (currentTime.getMinutes().toString(16)).slice(-2);
 
 
 
 //console.log(secondsHex, minutesHex, hourHex);
 //console.log(typeof secondsHex);
 
 
 } else {
 
 // console.log(currentTime);  // to get hours/min/secs
     let seconds = ("0" + currentTime.getSeconds()).slice(-2);
     let minutes = ("0" + currentTime.getMinutes()).slice(-2);
     let hour = ("0" + currentTime.getHours()).slice(-2);
// console.log(hour, minutes, seconds);
 
 };
 
 
 
 //$progressBar.style.width = `${(seconds / 60) * 14}rem`;

 
 
 
 //})();
 
 
    //scope: what values/variables do I have access do w/i this section of code 
    //use parseInt() toString method
    //for hex: 16