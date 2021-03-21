const displayDay = document.querySelector('.js-dday');

const getDay = () => {
  const examDay = new Date("2021-11-17:00:00:00+0900");
  const currentDay = new Date();

  const leftTime = examDay.getTime() - currentDay.getTime();
  const leftDay = Math.ceil(leftTime / (1000 * 60 * 60 * 24));

  displayDay.innerText = `수능까지 ${leftDay}일`;
}

function init() {
  getDay();
};
init();