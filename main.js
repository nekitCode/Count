const countNumber = document.querySelector('.count-number');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');

minusBtn.addEventListener('click',countMinus);
plusBtn.addEventListener('click',countPlus)

let count = 0;
function countMinus() {
    count--;
    if(count < 0) {
        countNumber.style.color = 'red';
    }else {
        countNumber.style.color = '#000000';
    }
    countNumber.textContent = count;
}

function countPlus() {
    count++;
    if(count > 0) {
        countNumber.style.color = 'green';
    }else {
        countNumber.style.color = '#000000';
    }
    countNumber.textContent = count;
}