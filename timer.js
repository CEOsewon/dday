const ddayTimer = document.querySelector(".dday-timer");

function counter() {
  const ddayTime = new Date(2019, 2, 2);
  const currentTime = new Date();
  const dayGap = currentTime.getTime() - ddayTime.getTime();

  const leftDays = Math.floor(dayGap / (1000 * 60 * 60 * 24));
  const leftHours = Math.floor((dayGap / (1000 * 60 * 60)) % 24);
  const leftMinutes = Math.floor((dayGap / (1000 * 60)) % 60);
  const leftSeconds = Math.floor((dayGap / 1000) % 60);

  ddayTimer.innerText = `${leftDays}일 ${leftHours}시간 ${
    leftMinutes < 10 ? `0${leftMinutes}` : leftMinutes
  }분 ${leftSeconds < 10 ? `0${leftSeconds}` : leftSeconds}초 동안💖`;
}

function init() {
  counter();
  setInterval(counter);
}

init();
