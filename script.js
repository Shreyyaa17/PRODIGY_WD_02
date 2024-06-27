let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

startStopBtn.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.textContent = 'Start';
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
});

function updateTime() {
    milliseconds += 1;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    updateDisplay();
}

function updateDisplay() {
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
