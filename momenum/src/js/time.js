const time = document.querySelector('.time');
const date = document.querySelector('.date');

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function showDate() {
    const month = new Date().getMonth();
    const weekDay = new Date().getDay();
    const day = new Date().getDate();
    
    date.innerHTML = `${WEEKDAYS[weekDay]}, ${MONTHS[month]} ${day}`;
};

const getZero = (num) => {
    return (num < 10 ? '0' : '') + num;
};

function showTime() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    time.innerHTML = `${hours}<span>:</span>${getZero(minutes)}<span>:</span>${getZero(seconds)}`;
    showDate();
    setTimeout(showTime, 1000);
};

export default showTime;