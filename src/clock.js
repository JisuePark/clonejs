const clockContainer = document.querySelector(".js-clock"),
  clock = clockContainer.querySelector("h1"),
  p = clockContainer.querySelector('p');

function getCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const weekday = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  let week = weekday[currentTime.getDay()];

  const twelveHours = hours - 12;
  if (hours > 12) {
    clock.innerText =
      `${twelveHours < 10 ? `0${twelveHours}` : twelveHours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    p.innerText = `PM .${week}`;
  } else {
    clock.innerText =
      `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    p.innerText = `AM .${week}`;
  }

}

function init() {
  getCurrentTime();
  setInterval(getCurrentTime, 1000);
}

init();