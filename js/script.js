let selectionNums = document.querySelectorAll('.selectionNum');
let selectionNumsMin = document.querySelectorAll('.selectionNum-');
let selectionNumsPus = document.querySelectorAll('.selectionPus');
let quantityFree = document.querySelector('.quantity-free');
let totalPrice = document.querySelector('.total-price');
let dopPrice = document.querySelectorAll('.dop-price');
let but = document.querySelector('.price-block__button');
const total = 220;


function costSeter() {
    if (quantityFree.innerHTML == 0) {
        for (let i = 0; i < dopPrice.length; i++) {
            dopPrice[i].innerHTML = '+0 ₽';
        }
    } else {
        for (let i = 0; i < dopPrice.length; i++) {
            dopPrice[i].innerHTML = '+60 ₽';
        }
    }
}




totalPrice.innerHTML = total + ' ₽';
quantityFree.innerHTML = 0;
costSeter();
/* console.log(totalPrice); */
for (let i = 0; i < selectionNums.length; i++) {
    selectionNums[i].innerHTML = 0;
}

for (let i = 0; i < selectionNumsPus.length; i++) {
    selectionNumsPus[i].addEventListener('click', () => {
        if (parseInt(quantityFree.innerHTML) == 0) {
            quantityFree.innerHTML = 1;
            costSeter();
        }
        selectionNums[i].innerHTML = parseInt(selectionNums[i].innerHTML) + 1;
    })
    
}

for (let i = 0; i < selectionNumsMin.length; i++) {
    selectionNumsMin[i].addEventListener('click', () => {

        if (parseInt(selectionNums[i].innerHTML) > 0) {
            selectionNums[i].innerHTML = parseInt(selectionNums[i].innerHTML) - 1;
        }

        let check = 0;
        for (let i = 0; i < selectionNums.length; i++) {
            check = check + parseInt(selectionNums[i].innerHTML);
        }

        if (check == 0) {
            quantityFree.innerHTML = 0;
            costSeter();
        }
    })
    
}

but.addEventListener('click', () => {
    let sum = 0;

    for (let i = 0; i < selectionNums.length; i++) {
        sum = sum + parseInt(selectionNums[i].innerHTML);
    }

    sum = sum * 60 - 60;

    totalPrice.innerHTML = parseInt(total) + sum + ' ₽';

    if (parseInt(quantityFree.innerHTML) == 0) {
        totalPrice.innerHTML = total + ' ₽';  
    }
});