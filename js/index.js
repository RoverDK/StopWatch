const hoursElement = document.querySelector('.hours')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')
const millisecondsElement = document.querySelector('.milliseconds')

const startButton = document.querySelector('.start')
const loopButton = document.querySelector('.loop')

const loopList = document.querySelector('.loop_list')

//Start and Pause Button
startButton.addEventListener('click', () => {
    if(pause){
        startButton.innerHTML = 'Pause';
        loopButton.innerHTML = 'Loop';
        loopButton.disabled = false;
        interval = setInterval(startTimer, 10);
    }else{
        startButton.innerHTML = 'Start';
        loopButton.innerHTML = 'Clear';
        clearInterval(interval);
    }
    pause = !pause;
})


//Loop and Clear Button
loopButton.addEventListener('click', () => {
    if(pause){
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        loopButton.disabled = true;
        hoursElement.innerHTML = '00';
        minutesElement.innerHTML = '00';
        secondsElement.innerHTML = '00';
        millisecondsElement.innerHTML = '00';

        while(loopList.firstChild) {
            loopList.removeChild(loopList.firstChild);
        }
    }else{
        if(milliseconds || seconds || minutes || hours){
            let li = document.createElement('li');
            li.innerHTML = `${hours ? hours + ' h' : ''} ${minutes ? minutes + ' m' : ''} ${seconds ? seconds + ' s' : ''} ${milliseconds} ms`;
            loopList.prepend(li)
        }
    }
    
})

let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    pause = true,
    interval

function startTimer() {
    // Milliseconds

    milliseconds++;
    if(milliseconds < 10){
        millisecondsElement.innerHTML = '0' + milliseconds;
    }else{
        if(milliseconds < 100){
            millisecondsElement.innerHTML = milliseconds
        }
    }
    if(milliseconds > 99){
        milliseconds = 0;
        millisecondsElement.innerHTML = '00';
        seconds++;
    }

    // Seconds

    if(seconds < 10){
        secondsElement.innerHTML = '0' + seconds;
    }else{
        if(seconds < 60){
            secondsElement.innerHTML = seconds
        }
    }
    if(seconds > 59){
        seconds = 0;
        secondsElement.innerHTML = '00';
        minutes++;
    }

    // Minutes

    if(minutes < 10){
        minutesElement.innerHTML = '0' + minutes;
    }else{
        if(minutes < 60){
            minutesElement.innerHTML = minutes
        }
    }
    if(minutes > 59){
        minutes = 0;
        minutesElement.innerHTML = '00';
        hours++;
    }
    
    // Hours

    if(hours < 10){
        hoursElement.innerHTML = '0' + hours;
    }else{
        if(hours < 24){
            hoursElement.innerHTML = hours;
        }
    }
    if(hours > 23){
        hours = 0;
        hoursElement.innerHTML = '00';
        window.alert('Wow');
    }
}