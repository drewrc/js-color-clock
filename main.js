function currentTime() {
    const date = new Date();
     let hh = date.getHours();
     let mm = date.getMinutes();
     let ss = date.getSeconds();
    
   
      hh = (hh < 10) ? "0" + hh : hh;
      mm = (mm < 10) ? "0" + mm : mm;
      ss = (ss < 10) ? "0" + ss : ss;
       
      let time = hh + ":" + mm + ":" + ss;
   
     document.querySelector(".clock-display").innerText = time; 
     var t = setTimeout(function(){currentTime()}, 1000); //recursion
 }
 
   
 currentTime();

 function barWidth() {
    const date = new Date();
    let ss = date.getSeconds();

    const bar = document.querySelector(".clock-progress-bar");
    console.log(bar);
    bar.style.width = (ss/60)*14 + "rem";
    setInterval(function(){barWidth()}, 1000);

 }

 barWidth();

 function changeColor() {

    
 }
 