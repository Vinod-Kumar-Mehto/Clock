const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");



function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    let secondsDegree = ((seconds/ 60) * 360) + 90;
    if(secondsDegree === 90){
        secondHand.style.transition = "all";
        secondHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    }else if(secondsDegree === 96){
        secondHand.style.transition = "all 0.5s";
        secondHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";

    }
    secondHand.style.transform =`rotate(${secondsDegree}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/ 60) * 360) + 90;
    minHand.style.transform =`rotate(${minutesDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/ 12) * 360) + 90;
    hourHand.style.transform =`rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000)