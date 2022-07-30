const display = document.querySelector('.output')
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(operator, num1, num2) {
    switch (operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 == 0) return `Really?`
            return divide(num1, num2);
    }

}

let inputMode = false;
let number1 = null;
let number2 = null;
let operation = null;
const numbers = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operate');

numbers.forEach((digit)=>{
    digit.addEventListener('click', (e)=>{
        if (!inputMode) {
            display.textContent = '';
        }
            display.textContent += digit.textContent;
            inputMode = true;
    });
});


const compute = document.querySelector('.compute');
const clear = document.querySelector('.clear');

clear.addEventListener('click', ()=>{
    display.textContent = '0';
    operation = null;
    inputMode = false;
    number1 = null;
    number2 = null;
});
compute.addEventListener('click',(e)=>{
    number2 = +display.textContent;

    if (number1 != null) display.textContent = operate(operation, number1, number2);
    operation = null;
    inputMode = false;
    number1 = null;

})

operators.forEach((operator)=> {
    operator.addEventListener('click', (e)=>{
        if (number1 == null) {
            number1 = +display.textContent;
        } else if (number1 != null) {
            console.log(number1)
            number2 = +display.textContent
            display.textContent = operate(operation, number1, number2)
            number1 = +display.textContent
        }

        
        operation = operator.textContent;
        inputMode = false;
    });
});
