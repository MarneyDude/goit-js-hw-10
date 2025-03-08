import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const status = formData.get('state');
  const delay = formData.get('delay');

  if (isNaN(delay) || delay <= 0) {
    error();
    return;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(success(delay));
      } else {
        reject(negative(delay));
      }
    }, delay);
  })
    .then(message => {
      return console.log(message);
    })
    .catch(error => {
      console.log(error);
    });
}

const success = delay => {
  iziToast.show({
    title: 'OK',
    titleColor: 'white',
    message: `Fulfilled promise in ${delay}ms`,
    color: '#5ac40c',
    messageColor: 'white',
    messageSize: '16',
    timeout: 2000,
    position: 'topCenter',
  });
};

const negative = delay => {
  iziToast.show({
    title: 'REJECTED',
    titleColor: 'white',
    message: `promise in ${delay}ms`,
    color: '#d1530f',
    messageColor: 'white',
    messageSize: '16',
    timeout: 2000,
    position: 'topCenter',
  });
};
const error = () => {
  iziToast.show({
    title: 'ERROR',
    titleColor: 'white',
    iconColor: 'white',
    message: 'Illegal operation',
    color: '#f80404',
    messageColor: 'white',
    messageSize: '16',
    timeout: 2000,
    position: 'topCenter',
  });
};
