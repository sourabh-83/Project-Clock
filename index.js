function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour % 12) * 30 + minute * 0.5;
    const minuteDeg = minute * 6 + second * 0.1;
    const secondDeg = second * 6;

    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;

    const digitalTime =
        hour.toString().padStart(2, '0') + ':' +
        minute.toString().padStart(2, '0') + ':' +
        second.toString().padStart(2, '0');

    document.getElementById('digital').textContent = digitalTime;
}

setInterval(updateClock, 1000);
updateClock();
