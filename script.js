let displayNumber = document.querySelector('label#current-number');
let currentNumber = '';
let arrayNumber = [];

let numbers = document.querySelector('div.numbers');
let multiNumber = 1;


let multiply = document.querySelector('button#multiply').addEventListener('click', () => {
    if (currentNumber == '') {
        multiNumber = arrayNumber;
        displayNumber.innerHTML += 'x';
    }
    else {
        arrayNumber.push(Number(currentNumber));
        multiNumber = Number(arrayNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
        displayNumber.innerHTML += 'x';
        currentNumber = '';
    }
});

let add = document.querySelector('button#add').addEventListener('click', () => {
    if (multiNumber>1){
        arrayNumber = [(Number(multiNumber*currentNumber))];
        currentNumber = '';
        displayNumber.innerHTML += '+';
        multiNumber = 1;
    }
    else {
        arrayNumber.push(Number(currentNumber));
        currentNumber = '';
        displayNumber.innerHTML += '+';
    }
});

let subtract = document.querySelector('button#subtract').addEventListener('click', () => {
    if (multiNumber>1){
        arrayNumber = [(Number(multiNumber*currentNumber))];
        currentNumber = '-';
        displayNumber.innerHTML += '-';
        multiNumber = 1;
    }
    else {
        arrayNumber.push(Number(currentNumber));
        currentNumber = '-';
        displayNumber.innerHTML += '-';
    }
});

function getNumber(n) {
    for(let i = n; i >= 0; i--) {
        let button = document.createElement('button');
        button.setAttribute("id", `n${i}`);
        numbers.appendChild(button);
        button.innerText = i;
        button.addEventListener('click', () => {
            currentNumber += i;
            displayNumber.innerHTML += i;
        })
    }
};

getNumber(9);




let operate = document.querySelector('button#equals')
.addEventListener('click', () => {
    if (multiNumber>1) {
        displayNumber.innerHTML = multiNumber*currentNumber;
        arrayNumber = [(Number(multiNumber*currentNumber))];
        multiNumber = 1;
        currentNumber = '';
    }
    else {
        arrayNumber.push(Number(currentNumber));
        currentNumber = ''
        arrayNumber = [arrayNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0)];
        displayNumber.innerHTML = arrayNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
});