const app = {
  newYears: "1 Jan 2022",
  countdown() {
    const newYearsDate = new Date(app.newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const min = Math.floor(totalSeconds / 60) % 60;
    const sec = Math.floor(totalSeconds) % 60;
    document.getElementById("days").innerText = app.formatTime(days);
    document.getElementById("hours").innerText = app.formatTime(hours);
    document.getElementById("mins").innerText = app.formatTime(min);
    document.getElementById("secs").innerText = app.formatTime(sec);
  },
  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  },
  init() {
    app.countdown();
  },
};
app.init();
setInterval(app.init, 1000);
