const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const birthdayDate = '29 sep 2021';


function countdown() {
    const birthDate = new Date(birthdayDate);
    const currentDate = new Date();

    const totalSeconds = Math.floor(birthDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);
    const secs = Math.floor((totalSeconds % 60));

    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = mins;
    secondsEl.innerHTML = secs;

}

setInterval(countdown, 1000);

