let number1 = Math.trunc(Math.random() * 20) + 1;

let number2 = Math.trunc(Math.random() * 20) + 1;

let totalSum = number1 + number2;

const numbers = document.querySelector('.RandNumber');
document.querySelector('.n1').addEventListener('click', function () {
  //console.log((numbers.textContent = number1));
  //numbers.textContent = number1;
  numbers.value = number1;
});

document.querySelector('.nice').addEventListener('click', function () {
  //console.log(document.querySelector('.RandNum').value);
  document.querySelector('.RandNum').value = number2;
});

document.querySelector('.tot').addEventListener('click', function () {
  //console.log(document.querySelector('.totalNumber').value);
  document.querySelector('.totalNumber').value = totalSum;
});

document.querySelector('.reset').addEventListener('click', function () {
  numbers.value = 0;
  document.querySelector('.RandNum').value = 0;
  document.querySelector('.totalNumber').value = 0;
  number1 = Math.trunc(Math.random() * 20) + 1;
  number2 = Math.trunc(Math.random() * 20) + 1;
  totalSum = number1 + number2;
});
