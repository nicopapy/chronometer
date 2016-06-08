var secondsUpdated = 0;
var minutesUpdated = 0;
var hoursUpdated = 0;
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");
var counter = 0;
var timing;
var toggleOnOff = false;

function changeElement(elementToChange, value) {
  value = value < 10 ? "0" + value : value
  document.getElementById(elementToChange).innerHTML = value;
};

var countingSeconds = function() {
  timing = setTimeout(function() {
    countingSeconds();
  }, 100);

  if (secondsUpdated < 59) {
    secondsUpdated += 1;
  } else {
    secondsUpdated = 0;

    if (minutesUpdated < 59) {
      minutesUpdated += 1;
      changeElement("minutes", minutesUpdated);
    } else {
      minutesUpdated = 0;
      hoursUpdated += 1;
      changeElement("hours", hoursUpdated);
    };
  };

  changeElement("seconds", secondsUpdated);
};

btnStart.onclick = function() {
  console.log('start');

  if (!toggleOnOff) {
    toggleOnOff = true;
    countingSeconds();
  };
};

btnStop.onclick = function() {
  console.log('stop');
  clearTimeout(timing);
  toggleOnOff = false;
};

btnReset.onclick = function() {
  console.log('reset');
  secondsUpdated = 0;
  minutesUpdated = 0;
  hoursUpdated = 0;
  changeElement("seconds", secondsUpdated);
  changeElement("minutes", minutesUpdated);
  changeElement("hours", hoursUpdated);
};
