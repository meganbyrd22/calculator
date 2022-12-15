//add html elements
const numberButtons = document.getElementsByClassName("numberButtons");
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

const operatorButtons = document.getElementsByClassName("operatorButtons");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clear");

//eventListeners
Button1.addEventListener('click', () => {})
Button2.addEventListener('click', () => {})
Button3.addEventListener('click', () => {})
Button4.addEventListener('click', () => {})
Button5.addEventListener('click', () => {})
Button6.addEventListener('click', () => {})
Button7.addEventListener('click', () => {})
Button8.addEventListener('click', () => {})
Button9.addEventListener('click', () => {})
Button0.addEventListener('click', () => {})

addButton.addEventListener('click', () => {})
subtractButton.addEventListener('click', () => {})
multiplyButton.addEventListener('click', () => {})
divideButton.addEventListener('click', () => {})
equalButton.addEventListener('click', () => {})

clearButton.addEventListener('click', () => {})


//addition function 
function addNumbers(num1,num2){
    let sum = num1 + num2;
    return sum
}

//subtraction function
function subtractNumbers(num1, num2){
    let  difference = num1 - num2;
    return difference
}

//multiplication function
function multiplyNumbers(num1, num2){
    let  product = num1 * num2;
    return product
}

//division function 
function divideNumbers(num1, num2){
    let  quotient = num1 / num2;
    return quotient;
}