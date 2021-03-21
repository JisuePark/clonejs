//
const userForm = document.querySelector(".js-userform"),
  input = userForm.querySelector("input"),
  userDisplay = document.querySelector(".js-user");

const USER_LS = "user",
  SHOWING_CN = "showing";

function saveUserName() {
  userForm.classList.add(SHOWING_CN);
  userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentUser = input.value;
    localStorage.setItem(USER_LS, currentUser);
    paintUserName(currentUser);
  });
}

function paintUserName(text) {
  userForm.classList.remove(SHOWING_CN);
  userDisplay.classList.add(SHOWING_CN);
  const userName = text;
  userDisplay.innerText = `You can do it! ${userName}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    saveUserName();
  } else {
    paintUserName(currentUser);
  }
}


function init() {
  loadName();
}

init();

