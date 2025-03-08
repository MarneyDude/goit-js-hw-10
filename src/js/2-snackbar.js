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
    iconUrl: `https://img.icons8.com/?size=100&id=12402&format=png&color=FFFFFF`,
    titleColor: 'white',
    message: `Fulfilled promise in ${delay}ms`,
    color: '#5ac40c',
    messageColor: 'white',
    messageSize: '16',
    timeout: 4000,
    position: 'topRight',
  });
};

const negative = delay => {
  iziToast.show({
    title: 'REJECTED',
    iconUrl: `https://img.icons8.com/?size=100&id=6734ErbSl05C&format=png&color=FFFFFF`,
    iconColor: 'white',
    titleColor: 'white',
    message: `promise in ${delay}ms`,
    color: '#d1530f',
    messageColor: 'white',
    messageSize: '16',
    timeout: 4000,
    position: 'topRight',
  });
};
const error = () => {
  iziToast.show({
    title: 'ERROR',
    iconUrl: `https://img.icons8.com/?size=100&id=24552&format=png&color=FFFFFF`,
    titleColor: 'white',
    iconColor: 'white',
    message: 'Illegal operation',
    color: '#f80404',
    messageColor: 'white',
    messageSize: '16',
    timeout: 4000,
    position: 'topRight',
  });
};
