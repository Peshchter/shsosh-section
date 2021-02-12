const timer = document.getElementById('timer');
let time = new Date();

timer.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
const tick = () => {
    time = new Date();
    timer.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
setInterval( tick, 1000);
