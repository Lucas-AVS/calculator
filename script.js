let displayNumber = document.querySelector('label#current-number')
let currentNumber = '';
let arrayNumber = [];

let loop = 0

let numbers = document.querySelector('div.numbers')

let add = document.querySelector('button#add').addEventListener('click', () => {
    arrayNumber.push(Number(currentNumber));
    currentNumber = '';
    displayNumber.innerHTML += '+';
    console.log(currentNumber)
})

let subtract = document.querySelector('button#subtract').addEventListener('click', () => {
    arrayNumber.push(Number(currentNumber));
    currentNumber = '-';
    displayNumber.innerHTML += '-';
    console.log(currentNumber)
})


function getNumber(n) {
    for(let i = n; i >= 0; i--) {
        let button = document.createElement('button');
        button.setAttribute("id", i);
        numbers.appendChild(button);
        button.innerText = i
        button.addEventListener('click', () => {
            if (!displayNumber.innerHTML.includes('+', '-', '÷', 'x') && loop >0 ) {
                displayNumber.innerHTML = i;
                arrayNumber = [i];
                loop = 0;
            }
            else { 
                currentNumber += i
                displayNumber.innerHTML += i;
            }
        })
    }
}

getNumber(9)




let bntEquals = document.querySelector('button#equals')
.addEventListener('click', () => {
    console.log(currentNumber)
    arrayNumber.push(Number(currentNumber));
    currentNumber = '';
    displayNumber.innerHTML = arrayNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    loop++
})