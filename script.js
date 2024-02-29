let timerInterval;
let milliseconds = 0;
let isRunning = false;

const startTimer = ()=>{
    if(!isRunning){
        isRunning = true;
        timerInterval = setInterval(updateTimer, 10);
    }
}

const  stopTimer = ()=>{
    clearInterval(timerInterval);
    isRunning = false;
    updateTimerDisplay();
}
const resetTimer = ()=>{
    clearInterval(timerInterval);
    isRunning = false;
    milliseconds =0;
    updateTimerDisplay();
}

const updateTimer = ()=>{
    milliseconds += 10;
    updateTimerDisplay();
}

const updateTimerDisplay = ()=>{
    const hourElement  = document.querySelector('.hour');
    const minuteElement = document.querySelector('.minute');
    const secondElement = document.querySelector('.second');
    const millisecondElement = document.querySelector('.millisecond');

    const totalMilliseconds = milliseconds % 1000;
    const hours = Math.floor(milliseconds / 3600000);
    const minutes = Math.floor((milliseconds % 3600000) / 6000);
    const seconds = Math.floor((milliseconds % 6000) / 1000);
     
    hourElement.textContent = formatTime(hours);
    minuteElement.textContent = formatTime(minutes);
    secondElement.textContent= formatTime(seconds);
    millisecondElement.textContent = formatTime(totalMilliseconds, 3).slice(0,2);

}

const formatTime = (value, length = 2)=>{
    return value.toString().padStart(length, '0');
}