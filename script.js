let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");
let hours = document.querySelector(".hours");
let days = document.querySelector(".days");
let start = document.querySelector(".custom-btn");
start.addEventListener("click", function () {
  seconds = document.querySelector(".seconds").value;
  minutes = document.querySelector(".minutes").value;
  hours = document.querySelector(".hours").value;
  days = document.querySelector(".days").value;
  let inter = setInterval(() => {
    seconds = seconds - 1;
    document.querySelector(".seconds").value = seconds;
    if (seconds == -1) {
      minutes = minutes - 1;
      seconds = 59;
      document.querySelector(".seconds").value = seconds;
      document.querySelector(".minutes").value = minutes;
    }
    if (minutes == -1) {
      hours = hours - 1;
      minutes = 59;

      document.querySelector(".minutes").value = minutes;
      document.querySelector(".hours").value = hours;
    }
    if (hours == -1) {
      days = days - 1;
      hours = 23;
      document.querySelector(".hours").value = hours;
      document.querySelector(".days").value = days;
    }
    if (seconds == 0 && minutes == 0 && hours == 0 && days == 0) {
      clearInterval(inter);
    }
  }, 1000);
  console.log(seconds, minutes, hours, days);
});
