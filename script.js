let stopwatchInterval;
let timerInterval;
let stopwatchSeconds = 0;
let timerSeconds = 0;
let timerDuration = 0;

function showStopwatch() {
    document.getElementById("stopwatch").style.display = "block";
    document.getElementById("timer").style.display = "none";
    document.getElementById("stopwatch-button").classList.add("active");
    document.getElementById("timer-button").classList.remove("active");
}

function showTimer() {
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("stopwatch-button").classList.remove("active");
    document.getElementById("timer-button").classList.add("active");
}

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        const hours = Math.floor(stopwatchSeconds / 3600);
        const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
        const seconds = stopwatchSeconds % 60;
        document.getElementById("stopwatch").querySelector("#hours").textContent = padNumber(hours);
        document.getElementById("stopwatch").querySelector("#minutes").textContent = padNumber(minutes);
        document.getElementById("stopwatch").querySelector("#seconds").textContent = padNumber(seconds);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    document.getElementById("stopwatch").querySelector("#hours").textContent = "00";
    document.getElementById("stopwatch").querySelector("#minutes").textContent = "00";
    document.getElementById("stopwatch").querySelector("#seconds").textContent = "00";
}

function startTimer() {
    clearInterval(timerInterval);
    timerDuration = document.getElementById("hours-input").value * 3600 + document.getElementById("minutes-input").value * 60 + Number(document.getElementById("seconds-input").value);
    timerSeconds = timerDuration;
    timerInterval = setInterval(() => {
        timerSeconds--;
        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor((timerSeconds % 3600) / 60);
        const seconds = timerSeconds % 60;
        document.getElementById("timer").querySelector("#hours").textContent = padNumber(hours);
        document.getElementById("timer").querySelector("#minutes").textContent = padNumber(minutes);
        document.getElementById("timer").querySelector("#seconds").textContent = padNumber(seconds);
        if (timerSeconds === 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    document.getElementById("hours-input").value = "";
    document.getElementById("minutes-input").value = "";
    document.getElementById("seconds-input").value = "";
    document.getElementById("timer").querySelector("#hours").textContent = "00";
    document.getElementById("timer").querySelector("#minutes").textContent = "00";
    document.getElementById("timer").querySelector("#seconds").textContent = "00";
}

function padNumber(number) {
    return number.toString().padStart(2, "0");
}


document.getElementById("stopwatch-button").addEventListener("click", showStopwatch);
document.getElementById("timer-button").addEventListener("click", showTimer);
document.getElementById("start-stopwatch-button").addEventListener("click", startStopwatch);
document.getElementById("stop-stopwatch-button").addEventListener("click", stopStopwatch);
document.getElementById("reset-stopwatch-button").addEventListener("click", resetStopwatch);
document.getElementById("start-timer-button").addEventListener("click", startTimer);
document.getElementById("stop-timer-button").addEventListener("click", stopTimer);
document.getElementById("reset-timer-button").addEventListener("click", resetTimer);

// Prevent form submission and start timer when "Enter" key is pressed
document.getElementById("timer-form").addEventListener("submit", (event) => {
    event.preventDefault();
    startTimer();
});