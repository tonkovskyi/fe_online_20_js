
let counterValue = 0;

const increment = function() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
};

const decrement = function() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
};

const incrBtnRef = document.querySelector('button[data-action="increment"]');
const decrBtnRef = document.querySelector('button[data-action="decrement"]');

incrBtnRef.addEventListener('click', increment);
decrBtnRef.addEventListener('click', decrement);