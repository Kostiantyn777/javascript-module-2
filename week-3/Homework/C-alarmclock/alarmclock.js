/*### Hints

- Have you tried looking at the `setInterval` function?

### Steps to complete

1. When the `Set Alarm` button is clicked, get the value of the input field  DONE!!!!!
2. When you have the input field value, set the title to the correct value   DONE!!!!!
3. Work out how to update the `Time Remaining` title every second
4. When the remaining time left is 0, play the alarm sound
 */

function setAlarm() {
  let inputNumbers = document.getElementById("alarmSet");
  let timeRemaining = document.getElementById("timeRemaining");
  let initialTime = inputNumbers.value;

  inputNumbers.value = "";

  function setAlarmInternal() {
    timeRemaining.textContent = "Time Remaining: " + timeOutFunc(initialTime);
    initialTime -= 1;

    if (initialTime <= -1) {
      clearInterval(timer);
      playAlarm();
    }
  }

  setAlarmInternal();

  function timeOutFunc(time) {
    if (time >= 60) {
      let timeParsed = parseInt(time, 10);
      let minutes = Math.floor(timeParsed / 60);
      let seconds = timeParsed - minutes * 60;
      return minutes + " : " + seconds;
    }
    if (time < 10) {
      return "00:0" + time;
    } else if (time <= 59 && time >= 10) {
      return "00:" + time;
    } else {
      return "00:" + time;
    }
  }
  let timer = setInterval(setAlarmInternal, 1000);
}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
