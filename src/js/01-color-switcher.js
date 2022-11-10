const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

startBtnEl.addEventListener('click', onStartClick);
stopBtnEl.addEventListener('click', onStopClick);
stopBtnEl.setAttribute('disabled', true);

let timerId = null;

function onStartClick() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnEl.setAttribute('disabled', true);
  stopBtnEl.removeAttribute('disabled');
}

function onStopClick() {
  clearInterval(timerId);
  stopBtnEl.setAttribute('disabled', true);
  startBtnEl.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
