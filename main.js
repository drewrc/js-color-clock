//refactored project
(function () {
  //immediately invoked function expression -> avoid leaking out to global scope - "we are not dirtying up the window object"

  "use strict"; // prevents bad syntax and causes some previously silent errors to bubble up and be seen
//define variables at beginning of code
  var $clock = document.querySelector(".clock");
  let $progressBar = document.querySelector(".clock-progress-bar");
  let $clockDisplay = document.querySelector(".clock-display");

//isHovering false so that clock automatically displays current time regularly
  let isHovering = false;

  //addeventlistener to change time to hex color using function isHovering when mouse is hovering
  $clock.addEventListener("mouseout", function () {
    isHovering = true;
  });

  //event listner that changes back to the time on display 
  $clock.addEventListener("mouseover", function () {
    isHovering = false;
  });

  
//function to display current time, progress bar, change background color and change time to hex

  function updateClockDisplay() {
   //variable assigned and defined for current date
    const currentTime = new Date();
    let timeDisplayValue;
   //define s/m/h, add string of 0 
   //create string to define variable 
    let seconds = ("0" + currentTime.getSeconds().toString(16)).slice(-2);
    let minutes = ("0" + currentTime.getMinutes().toString(16)).slice(-2);
    let hour = ("0" + currentTime.getHours().toString(16)).slice(-2);

   //new string to define hexSeconds, etc for color 
   let hexSeconds = ("0" + currentTime.getSeconds()).slice(-2);
   let hexMinutes = ("0" + currentTime.getMinutes()).slice(-2);
   let hexHour = ("0" + currentTime.getHours()).slice(-2);

   //if else statment to change current time on hover using event listeners above 
   if (isHovering) {
      timeDisplayValue = hexHour + ":" + hexMinutes + ":" + hexSeconds;
    } else {
      timeDisplayValue = hour + ":" + minutes + ":" + seconds;
    }

    //target inner text (00:00:00) of $clock display to update time
    $clockDisplay.innerText = timeDisplayValue;
    //changes the length of progress bar based on seconds
    $progressBar.style.width = `${currentTime.getSeconds() / 60 * 14}rem`;
    //changes background color creating a new string based of hex number using string concatination
    $clock.style.backgroundColor = `#${hexHour}${hexMinutes}${hexSeconds}`;

  }
//use setInterval to change the time of the updateClockDisplay function every second
  setInterval(updateClockDisplay, 1000);

})();
