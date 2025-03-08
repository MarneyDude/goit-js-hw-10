import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/material_blue.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default iziToast;

let userSelectedDate = null;
let indexInterval = null;

const elements = {
  get button() {
    return document.querySelector('.button');
  },
  get input() {
    return document.querySelector('#datetime-picker');
  },
  get daysElement() {
    return document.querySelector('[data-days]');
  },
  get hoursElement() {
    return document.querySelector('[data-hours]');
  },
  get minutesElement() {
    return document.querySelector('[data-minutes]');
  },
  get secondsElement() {
    return document.querySelector('[data-seconds]');
  },
};

const {
  button,
  input,
  daysElement,
  hoursElement,
  minutesElement,
  secondsElement,
} = elements;

button.addEventListener('click', startTimer);
button.setAttribute('disabled', true);

function startTimer() {
  if (!userSelectedDate) return;

  button.setAttribute('disabled', true);
  input.setAttribute('disabled', true);

  if (indexInterval) {
    clearInterval(indexInterval);
  }

  const updateTimer = () => {
    const now = new Date();
    const ms = userSelectedDate - now;

    if (ms <= 0) {
      clearInterval(indexInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      endMessage();
      input.removeAttribute('disabled');

      return;
    }

    updateTimerDisplay(convertMs(ms));
  };

  updateTimer();
  indexInterval = setInterval(updateTimer, 1000);
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daysElement.textContent = String(days).padStart(2, '0');
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

function validateDate(date) {
  const now = new Date();
  if (date <= now) {
    errorMessage();
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');

    userSelectedDate = date;
  }
}

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    validateDate(selectedDates[0]);
  },

  onChange(selectedDates) {
    validateDate(selectedDates[0]);
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: Math.floor(ms / day),
    hours: Math.floor((ms % day) / hour),
    minutes: Math.floor(((ms % day) % hour) / minute),
    seconds: Math.floor((((ms % day) % hour) % minute) / second),
  };
}

const errorMessage = () => {
  iziToast.show({
    message: 'Please choose a date in the future',
    color: 'red',
    messageColor: 'black',
    messageSize: '18',
    timeout: 1500,
    position: 'topCenter',
  });
};

const endMessage = () => {
  iziToast.show({
    message: 'Time is up. Please choose a date',
    color: 'green',
    messageColor: 'black',
    messageSize: '22',
    timeout: 1000000,
    position: 'bottomCenter',
  });
};
