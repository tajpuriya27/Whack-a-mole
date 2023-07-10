let score = 0;
let timing = 30;
let isStarted = false;

const holes = document.querySelectorAll(".hole");
let usrScore = document.getElementById("score");
let countDownTime = document.getElementById("countdown-time");

document.addEventListener("keydown", startFun);

function startFun(e) {
  if (e.key === " " && !isStarted) {
    isStarted = true;
    // console.log("he");
    start();
  }
}

function start() {
  let myInterval = setInterval(() => {
    let rndNum1 = Math.floor(Math.random() * 9);
    let rndNum2 = Math.floor(Math.random() * 9);

    holes[rndNum1].classList.add("mole");
    holes[rndNum2].classList.add("mole");
    //   console.log(`interval ${rndNum1} and ${rndNum2}`);
    setTimeout(() => {
      holes[rndNum1].classList.remove("mole");
      holes[rndNum2].classList.remove("mole");
      // console.log(`setTimeOut ${rndNum1} and ${rndNum2}`);
    }, 1500);
  }, 1500);

  let timeInterval = setInterval(() => {
    countDownTime.innerText = timing > 9 ? `00:${timing}` : `00:0${timing}`;
    if (timing === 0) {
      clearInterval(myInterval);
      clearInterval(timeInterval);
      timing = 30;
      score = 0;
      isStarted = false;
    }
    --timing;
  }, 1000);
}

for (let i = 0; i < 9; i++) {
  document.querySelectorAll(".hole")[i].addEventListener("click", holeClickFun);
}

function holeClickFun(e) {
  if (e.target.classList.contains("mole")) {
    score++;
  }
  usrScore.innerText = score;
}
