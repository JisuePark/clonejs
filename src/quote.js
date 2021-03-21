const quote = document.querySelector('.js-quote');

const quoteArray = [
  "가장 어두운 밤도 끝날 것이다.  그리고 태양은 떠오를 것이다. - 빈센트 반 고흐",
  "기운과 끈기는 모든 것을 이겨낸다. - 벤자민 프랭클린",
  "행동의 가치는 그 행동을 끝까지 이루는 데 있다. - 칭기즈칸",
  "꿈이 있다면 그 꿈을 잡고 절대 놓아주지마라. - 캐럴 버넷",
  "나를 죽이지 않는 역경은나를 키운다 - 니체",
  "해야함은 할 수 있음을 함축한다! - 칸트"
]


const paintQuote = (num) => {
  quote.innerText = quoteArray[num];
}

const getRandom = () => {
  const num = Math.floor(Math.random() * 6);
  return num;
}


function init() {
  const randomNum = getRandom();
  paintQuote(randomNum);
}
init();