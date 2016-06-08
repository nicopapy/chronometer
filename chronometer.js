Chronometer = function() {
  this.secondsUpdated = 0;
  this.minutesUpdated = 0;
  this.hoursUpdated = 0;
  this.timing = undefined;
  this.toggleOnOff = false;
}

Chronometer.prototype = {

  changeElement: function(elementToChange, value) {
    value = value < 10 ? "0" + value : value
    document.getElementById(elementToChange).innerHTML = value;
  },

  countingSeconds: function() {
    var that = this;

    this.timing = setTimeout(function() {
      that.countingSeconds();
    }, 1000);

    if (this.secondsUpdated < 59) {
      this.secondsUpdated += 1;
    } else {
      this.secondsUpdated = 0;

      if (this.minutesUpdated < 59) {
        this.minutesUpdated += 1;
        this.changeElement("minutes", this.minutesUpdated);
      } else {
        this.minutesUpdated = 0;
        this.hoursUpdated += 1;
        this.changeElement("hours", this.hoursUpdated);
      };
    };

    this.changeElement("seconds", this.secondsUpdated);
  },

  reset:function(){
    this.secondsUpdated = 0;
    this.minutesUpdated = 0;
    this.hoursUpdated = 0;
    this.changeElement("seconds", 0);
    this.changeElement("minutes", 0);
    this.changeElement("hours", 0);
  },

  resume: function(){
    console.log('start/resume');
    if (!this.toggleOnOff) {
      this.toggleOnOff = true;
      this.countingSeconds();
    }
  },

  stop: function(){
    console.log('stop');
    clearTimeout(this.timing);
    this.toggleOnOff = false;
  }
}

var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");
var my_chronometer = new Chronometer();

btnStart.onclick = function() {
  my_chronometer.resume()
};

btnStop.onclick = function() {
  my_chronometer.stop()
};

btnReset.onclick = function() {
  my_chronometer.reset()
};
