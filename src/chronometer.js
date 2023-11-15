class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    let intervalId = setInterval(() => {
    this.currentTime += 1
    if(printTimeCallback){
      printTimeCallback()
    }
    }, 1000)
    this.intervalId = intervalId;
}


  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
     return (minutes);
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60);
     return (seconds);
  }

  computeTwoDigitNumber(value){
    let i = '0' + value;
    return i.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`;
  }
}
