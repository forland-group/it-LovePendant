$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
    });
});

const hours = document.querySelector('.timer-hour');
const minutes = document.querySelector('.timer-minut');
const seconds = document.querySelector('.timer-second');

let time = new Date().setMinutes(new Date().getMinutes() + 10);

function couts() {
    let now = new Date();
    let gap = time - now;

    let hour = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minute = Math.floor(gap / 1000 / 60) % 60;
    let second = Math.floor(gap / 1000) % 60;

    if (hour < 10) {
        hours.innerText = `0${hour}`
    } else {
        hours.innerText = hour
    }

    if (minute < 10) {
        minutes.innerText = `0${minute}`
    } else {
        minutes.innerText = minute
    }

    if (second < 10) {
        seconds.innerText = `0${second}`
    } else {
        seconds.innerText = second
    }
}

setInterval(couts, 1000);