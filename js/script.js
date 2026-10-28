let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let sec = 0;
let min = 0;
let hr = 0;

let timer ;
start.addEventListener("click", () => {
    timer = false;
let oma = setInterval(()=>{
    if (timer == false ){
   if(timer == false){
                sec++

                second.innerHTML = sec.toString().padStart(2,"0");
        if(sec==60){
            min++
            minute.innerHTML = min.toString().padStart(2,"0");
            sec=0
           if(min==60){
             hr++
            hour.innerHTML = hr.toString().padStart(2,"0");
            min=0
           }
        }
    }
    }
   else{
    clearInterval(oma)

   }
},1000)
});

stop.addEventListener( 'click',()=>{
        timer = true;

});

reset.addEventListener( 'click',()=>{
      timer = true;
        sec = 0;
        min = 0;
        hr = 0;
                second.innerHTML = sec.toString().padStart(2,"0");
            hour.innerHTML = hr.toString().padStart(2,"0");
            minute.innerHTML = min.toString().padStart(2,"0");

})