//https://addition-domo.herokuapp.com/

"use strict";


let number1 = Math.trunc(Math.random() * 20) + 1;

let number2 = Math.trunc(Math.random() * 20) + 1;

let totalSum = number1 + number2;

const numbers = document.querySelector('.RandNumber');

const Numb1=document.querySelector('.n1');
const Numb2=document.querySelector('.nice');
const total=document.querySelector('.tot');


 Numb1.addEventListener('click', function () {
  console.log((numbers.textContent = number1));
  //numbers.textContent = number1;
numbers.value = number1;
Numb1.style.backgroundColor='blue'
});


Numb2.addEventListener('click', function () {
  //console.log(document.querySelector('.RandNum').value);
  document.querySelector('.RandNum').value = number2;
  Numb2.style.backgroundColor='red'
  
});

total.addEventListener('click', function () {
  //console.log(document.querySelector('.totalNumber').value);
  document.querySelector('.totalNumber').value = totalSum;
 total.style.backgroundColor='yellow'
});



document.querySelector('.reset').addEventListener('click', function () {
  numbers.value = 0;

  Numb1.style.backgroundColor=''
  Numb2.style.backgroundColor=''
  total.style.backgroundColor=''
  document.querySelector('.RandNum').value = 0;
  document.querySelector('.totalNumber').value = 0;
  number1 = Math.trunc(Math.random() * 20) + 1;
  number2 = Math.trunc(Math.random() * 20) + 1;
  totalSum = number1 + number2;
});

