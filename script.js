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
let decimal = true;
const numbers = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operate');

numbers.forEach((digit)=>{
    digit.addEventListener('click', (e)=>{
        if (!inputMode) {
            display.textContent = '';
            decimal = true;
        }
            if (digit.textContent == '.') {
                if (!decimal) {
                    return
                }
                decimal = false;
                
                
            } 
            display.textContent += digit.textContent;
            inputMode = true;
    });
});


const compute = document.querySelector('.compute');
const clear = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');


function resetColors(){
    operators.forEach(operator => operator.classList.remove('selected') );
}

function deleteFunction () {
    if (display.textContent == '') {
        return
    }

    if (!inputMode) {
        display.textContent = '0';
        operation = null;
        resetColors();
        inputMode = false;
        number1 = null;
        number2 = null;
    }   
    if (display.textContent.charAt(display.textContent.length - 1) == '.') {
        decimal = true;
    } 
    display.textContent = display.textContent.slice(0, -1);
}
deleteButton.addEventListener('click',deleteFunction )
clear.addEventListener('click', ()=>{
    display.textContent = '0';
    operation = null;
    resetColors();
    inputMode = false;
    number1 = null;
    number2 = null;
});
compute.addEventListener('click',(e)=>{
    number2 = +display.textContent;

    if (number1 != null) display.textContent = operate(operation, number1, number2);
    operation = null;
    resetColors()
    inputMode = false;
    number1 = null;

})

function operatorFunction(e) {
    if (number1 == null) {
        number1 = +display.textContent;
    } else if (number1 != null) {
        console.log(number1)
        number2 = +display.textContent
        display.textContent = operate(operation, number1, number2)
        number1 = +display.textContent
    }

    resetColors()
    operation = e.target.textContent;
    e.target.classList.add('selected');
    inputMode = false;
}

operators.forEach((operator)=> {
    operator.addEventListener('click', operatorFunction);
});

const keys = [
    "Backspace",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    ".",
    "+",
    "-",
    "/",
    '=',
    "Enter"
];

const operatorKeys = []

const clickEvent = new Event("click");
document.addEventListener('keydown', (e)=> {
    if (keys.includes(e.key)) {
        e.preventDefault()
        if (e.key == "Enter") {
            document.querySelector(`[key="="]`).dispatchEvent(clickEvent)
            return
        }
        
        document.querySelector(`[key="${e.key}"]`).dispatchEvent(clickEvent)
        return;
    }
    
})