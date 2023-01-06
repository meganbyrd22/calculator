//add html elements

const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clear");

let num1 = Number(" ");
let num2 = Number(" ");
let num3 = num1;
let num4 = Number(" ");
let numberClicked = document.getElementById('numberClicked');
let operatorClicked = document.getElementById("operatorClicked");
let secondOperatorClicked = document.getElementById("secondOperatorClicked");


let sum = Number(document.getElementById("sum"));
let difference = Number(document.getElementById("difference"));
let product = Number(document.getElementById("product"));
let quotient = Number(document.getElementById("quotient"));
let result = Math.round(Number(" "));

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
    //assign numbers based on numberClicked
    if(operatorClicked == null){
        num1 = Number(numberClicked);
    }
    else if(operatorClicked != null){
        num2 = Number(numberClicked);
        operate(num1, num2, operatorClicked);
        reassignNums(result);
    }})})
    //checkNumbers(numberClicked)})})


//function to check numbers
//function checkNumbers(){
    //if(operatorClicked == null){
       // num1 = Number(numberClicked);
    //}
    //else if(operatorClicked != null){
    //    num2 = Number(numberClicked);
       // operate(num1, num2, operatorClicked);
       // reassignNums(result);
   // }}
    //else (reassignNums())}

//function to reassign num1
function reassignNums(){
    if(result != null){
        num1 = result;
    }
}
    

//operator buttons listener
const operatorButtons = document.querySelectorAll('.operatorButtons');
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click',(e) => { 
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
    clearDisplay();
    num1 = "0";
    num2 = "";
    operatorClicked = null;
    //result = "";
})

//function to clear displayArea
function clearDisplay(){
    displayArea.replaceChildren();
   
};

//equal button eventListener
const equal = (document.getElementById)("equal");
equal.addEventListener('click', () => {
    clearDisplay();
    displayArea.append(Number(result));
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
    //console.log(result);
}

//subtraction function
function subtractNumbers(num1, num2){
    result = num1 - num2;
}

//multiplication function
function multiplyNumbers(num1, num2){
    result = num1 * num2;
}

//division function 
function divideNumbers(num1, num2){
    if(num2 === 0){
        alert("Can't divide by 0 ya goof!");
    }
    else{result = num1 / num2};
}

