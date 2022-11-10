import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('button[data-start]');
startBtnEl.addEventListener('click', onClickStart);
startBtnEl.setAttribute('disabled', true);
let intervalId = null;
let calendarDate = null;

function onClickStart() {
  startBtnEl.setAttribute('disabled', true);
  intervalId = setInterval(() => {
    const diff = calendarDate - Date.now();

    if (diff <= 0) {
      clearInterval(intervalId);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(diff);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    calendarDate = selectedDates[0];

    if (calendarDate < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 3000,
      });
      startBtnEl.setAttribute('disabled', true);
      return;
    } else {
      startBtnEl.removeAttribute('disabled');
      console.log(calendarDate);
      clearInterval(intervalId);
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr('input#datetime-picker', options);
