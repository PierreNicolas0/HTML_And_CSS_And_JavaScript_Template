// Animation onscrolling
let skills = document.querySelector(".skills");
let progressSpan = document.querySelectorAll(".progress span");
let stats = document.querySelector(".stats");
let nums = document.querySelectorAll(".box .number");
let started = false;

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  if (window.scrollY >= skills.offsetTop) {
    progressSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

// CountDown Date
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let countDown = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And CountDown Date
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if ((dateDiff = 0)) {
    clearInterval(countDown);
  }
}, 1000);
