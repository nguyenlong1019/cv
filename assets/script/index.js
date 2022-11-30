const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0);
});

// Digital Clock
const hoursElem = document.getElementById('clock-hours');
const minutesElem = document.getElementById('clock-minutes');
const secondsElem = document.getElementById('clock-seconds');
const ampmElem = document.getElementById('clock-ampm');

function updateClock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hoursElem.innerText = h;
    minutesElem.innerText = m;
    secondsElem.innerText = s;
    ampmElem.innerText = ampm;
    setTimeout(() => {
        updateClock();
    },1000);
}

updateClock();