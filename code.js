const display = document.getElementById('clock');
const audio = new Audio('https://orangefreesounds.com/wp-content/uploads/2020/05/Alarm-ringtone.mp3?_=1');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const date = new Date();

    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    
    display.innerText=`${hour} : ${minutes} : ${seconds}`;
}

function formatTime(time) {
    if (time < 10 ) {
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime = value;
}

function setAlarm(){
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');        
    }
}
setInterval(updateTime, 1000);

// function updateClock() {
//     var now = new Date();
//     var dayname = now.getDay(),
//         mo = now.getMonth(),
//         dnum = now.getDate(),
//         yr = now.getFullYear(),
//         pe = "AM";

//         if (hour == 0) {
//             hour = 12;
//         }
// }