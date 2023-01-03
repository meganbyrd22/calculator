//add html elements
//let operatorButtonClicked = false;

const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clear");

let num1 = Number(" ");
let num2 = Number(" ");
let num3 = Number(" ");
let numberClicked = document.getElementById('numberClicked');
let operatorClicked = document.getElementById("operatorClicked");


let sum = Number(document.getElementById("sum"));
let difference = Number(document.getElementById("difference"));
let product = Number(document.getElementById("product"));
let quotient = Number(document.getElementById("quotient"));
let result = Number(" ");

//eventListeners

//number buttons listener
const numberButtons = document.querySelectorAll('.numberButtons');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click',(e) => { 
    numberButtonClicked = `${e.target.id}`;
    //append numberClicked to displayArea
    displayArea.append(numberButtonClicked);
    numberClicked = displayArea.textContent;
    console.log(numberClicked)
    checkNumbers(result, num1,num2)
    })
    })


//operator buttons listener
const operatorButtons = document.querySelectorAll('.operatorButtons');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click',(e) => { 
        num1 = Number(displayArea.textContent);
        //clear displayArea
        clearDisplay(displayArea);
        //append operatorClicked to displayArea
        operatorClicked = `${e.target.id}`;
        displayOperatorClicked(operatorClicked);
    })})

//function to append operatorClicked to DOM
function displayOperatorClicked(){
    displayArea.append(operatorClicked);
    console.log(operatorClicked); 
    setTimeout(clearDisplay, 500);
};

//clear button event listener
const clear = (document.getElementById)("clear");
clear.addEventListener('click', () => {
    displayArea.replaceChildren()
})

//function to clear displayArea
function clearDisplay(){
    displayArea.replaceChildren()
};

//equal button eventListener
const equal = (document.getElementById)("equal");
equal.addEventListener('click', () => {
    num2 = Number(displayArea.textContent);
    operate(num1, num2, operatorClicked);
})

//function to check if both numbers are declared
function checkNumbers(){
    if(result != undefined){
        num3 = result;
        operateAgain(result);
    }
    else if (num1 && num2 != undefined){
        operate(num1, num2)
    }
}

//operate function 
function operate(num1,num2,operatorClicked){
    ;
    if (operatorClicked === "+") addNumbers(num1, num2);
    if (operatorClicked === "-") subtractNumbers(num1, num2);
    if (operatorClicked === "*") multiplyNumbers(num1, num2);
    if (operatorClicked === "/") divideNumbers(num1, num2);
}

//second operate function
function operateAgain(num3, num2, operatorClicked){
    if (operatorClicked === "+") addNumbers(num3, num2);
    if (operatorClicked === "-") subtractNumbers(num3, num2);
    if (operatorClicked === "*") multiplyNumbers(num3, num2);
    if (operatorClicked === "/") divideNumbers(num3, num2);
}

//addition function 
function addNumbers(num1, num2){
    result = (num1 + num2);
    //console.log(Number(sum));
    clearDisplay();
    displayArea.append(result);
    //result = displayArea.textContent;
}

//subtraction function
function subtractNumbers(num1, num2){
    result = num1 - num2;
    clearDisplay();
    displayArea.append(result);
    result = displayArea.textContent;
}

//multiplication function
function multiplyNumbers(num1, num2){
    result = num1 * num2;
    clearDisplay();
    displayArea.append(result);
    //result = displayArea.textContent;
}

//division function 
function divideNumbers(num1, num2){
    result = num1 / num2;
    clearDisplay();
    displayArea.append(result);
    //result = displayArea.textContent; 
}


//Button1.addEventListener('click', () => {})
//Button2.addEventListener('click', () => {})
//Button3.addEventListener('click', () => {})
//Button4.addEventListener('click', () => {})
//Button5.addEventListener('click', () => {})
//Button6.addEventListener('click', () => {})
//Button7.addEventListener('click', () => {})
//Button8.addEventListener('click', () => {})
//Button9.addEventListener('click', () => {})
//Button0.addEventListener('click', () => {})

//addButton.addEventListener('click', () => {})
//subtractButton.addEventListener('click', () => {})
//multiplyButton.addEventListener('click', () => {})
//divideButton.addEventListener('click', () => {})
//equalButton.addEventListener('click', () => {})

//clearButton.addEventListener('click', () => {})


const Button1 = document.getElementById("Button1")
const Button2 = document.getElementById("Button2")
const Button3 = document.getElementById("Button3")
const Button4 = document.getElementById("Button4")
const Button5 = document.getElementById("Button5")
const Button6 = document.getElementById("Button6")
const Button7 = document.getElementById("Button7")
const Button8 = document.getElementById("Button8")
const Button9 = document.getElementById("Button9")
const Button0 = document.getElementById("Button0")
const displayArea = document.getElementById("displayArea");


const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
