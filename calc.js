//add html elements

const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clear");

let num1 = Number(" ");
let num2 = Number(" ");
let num3 = Number(" ");
let numberClicked = document.getElementById('numberClicked');
let operatorClicked = document.getElementById("operatorClicked");
let secondOperatorClicked = document.getElementById("secondOperatorClicked");


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
    console.log(numberClicked);
    ;
    //checkNumbers(result, num1,num2)
    if(operatorClicked == null){
        num1 = Number(displayArea.textContent)
    }
    else if(operatorClicked != null){
        num2 = Number(displayArea.textContent);
        operate(num1, num2, operatorClicked);}
    else if (result != null && operatorClicked != null){
        num1 = result;
        operate(num1, num2, operatorClicked);
    }
    } ) })
    


//operator buttons listener
const operatorButtons = document.querySelectorAll('.operatorButtons');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click',(e) => { 
        //clear displayArea
        clearDisplay(displayArea);
        //append operatorClicked to displayArea
        operatorClicked = `${e.target.id}`;
        displayOperatorClicked(operatorClicked)
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
    operate(num1, num2, operatorClicked);
})

//operate function 
function operate(num1,num2,operatorClicked){
    if (operatorClicked === "+") addNumbers(num1, num2);
    if (operatorClicked === "-") subtractNumbers(num1, num2);
    if (operatorClicked === "*") multiplyNumbers(num1, num2);
    if (operatorClicked === "/") divideNumbers(num1, num2);
}

//addition function 
function addNumbers(num1, num2){
    result = (num1 + num2);
    clearDisplay();
    displayArea.append(result);
    console.log(result);
}

//subtraction function
function subtractNumbers(num1, num2){
    result = num1 - num2;
    clearDisplay();
    displayArea.append(result);
}

//multiplication function
function multiplyNumbers(num1, num2){
    result = num1 * num2;
    clearDisplay();
    displayArea.append(result);
}

//division function 
function divideNumbers(num1, num2){
    result = num1 / num2;
    clearDisplay();
    displayArea.append(result);
}
