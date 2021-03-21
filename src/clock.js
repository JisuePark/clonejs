const clockContainer = document.querySelector(".js-clock"),
  clock = clockContainer.querySelector("h1");

function getCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const day = currentTime.getDay();
  clock.innerText =
    `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
}

init();