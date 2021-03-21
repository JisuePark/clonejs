//
//today todo
const todayForm = document.querySelector('.js-todaytodo');
const todayInput = todayForm.querySelector('input');
const todayUl = document.querySelector('.js-todayList')
//this week todo
const weekForm = document.querySelector('.js-weektodo');
const weekInput = weekForm.querySelector('input');
const weekUl = document.querySelector('.js-weekList')

const TODAY_TD_LS = "today todo"
const WEEK_TD_LS = "week todo"

let todayTodoArray = [];
let weekTodoArray = [];



function delWeekTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  weekUl.removeChild(li);
  const cleanToDos = weekTodoArray.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  weekTodoArray = cleanToDos;
  saveWeekToDos();
}
function delTodayTodo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todayUl.removeChild(li);
  const cleanToDos = todayTodoArray.filter((toDo) => {
    return toDo.id !== parseInt(li.id);
  });
  todayTodoArray = cleanToDos;
  saveTodayToDos();
}


function saveWeekToDos() {
  localStorage.setItem(WEEK_TD_LS, JSON.stringify(weekTodoArray));
}
function saveTodayToDos() {
  localStorage.setItem(TODAY_TD_LS, JSON.stringify(todayTodoArray));
}

function paintWeekTodo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = weekTodoArray.length + 101;
  delBtn.innerHTML = "X";
  delBtn.addEventListener('click', delWeekTodo);
  span.innerText = text
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  weekUl.appendChild(li);
  const weekObj = {
    text: text,
    id: newId
  }
  weekTodoArray.push(weekObj);
  saveWeekToDos()
}

function paintTodayTodo(text) {
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = todayTodoArray.length + 1;
  delBtn.innerHTML = "X";;
  delBtn.addEventListener('click', delTodayTodo);
  span.innerText = text
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  todayUl.appendChild(li);
  const todayObj = {
    text: text,
    id: newId
  }
  todayTodoArray.push(todayObj);
  saveTodayToDos()
}


function handleWeekSubmit(event) {
  event.preventDefault();
  const currentValue = weekInput.value;
  paintWeekTodo(currentValue);
  weekInput.value = "";
}


function handleTodaySubmit(event) {
  event.preventDefault();
  const currentValue = todayInput.value;
  paintTodayTodo(currentValue);
  todayInput.value = "";

}


function loadTodayTodo() {
  const todayTodos = localStorage.getItem(TODAY_TD_LS);
  if (todayTodos !== null) {
    const parsedToDos = JSON.parse(todayTodos);
    parsedToDos.forEach((list) => {
      paintTodayTodo(list.text);
    });
  }

}

function loadWeekTodo() {
  const weekTodos = localStorage.getItem(WEEK_TD_LS);
  if (weekTodos !== null) {
    const parsedToDos = JSON.parse(weekTodos);
    parsedToDos.forEach((list) => {
      paintWeekTodo(list.text);
    });
  }

}


function init() {
  loadTodayTodo();
  loadWeekTodo();
  todayForm.addEventListener("submit", handleTodaySubmit);
  weekForm.addEventListener("submit", handleWeekSubmit);

}

init();