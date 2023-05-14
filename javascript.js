const buttons = document.querySelectorAll('.button.grey');
const calculationButtons = document.querySelectorAll('.button.darkGrey')
const screen = document.querySelector('.screen');
const screenCalculation = document.querySelector('.calculation');
const screenResult = document.querySelector('.result');
const calculate = document.querySelector('#calculate');
const dot = document.querySelector('.dot');
const deleteLast = document.querySelector('.delete');


const numbers = {
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8,
    nine: 9, zero: 0
};

let results = [];
let result;
let firstNumber;
let secondNumber;
let lastOperator;
let newOperator;
let number;

buttons.forEach(e => {
    e.addEventListener('click', (e) => {
        number = numbers[e.target.classList[2]]; // 1 to 9 number
        screenCalculation.textContent += number;
        numberEntered = parseFloat(screenCalculation.textContent); // Number from screen  
        console.log("🚀 ~ numberEntered:", numberEntered);
        })
    });
dot.addEventListener('click', (e) => {
    let checkForDots = screenCalculation.textContent
    let checkDotsArray = Array.from(checkForDots);
    const anyDot = checkDotsArray.some(letter => letter == ".");
    if (!anyDot) {
        screenCalculation.textContent += "." 
    }
});
    
calculationButtons.forEach(e => {
    e.addEventListener('click', (e) => {
        screenCalculation.textContent = "";
        lastOperator = newOperator;
        newOperator = e.target.classList[2];   
        // console.log("🚀 ~ operator:", operator);
        secondNumber = numberEntered;
        if (firstNumber !== undefined) {
            // createAvangers();
            result = simpleMathFunctions[lastOperator](firstNumber, secondNumber);
            console.log("🚀 ~ result:", result)
            results.push(result);
            firstNumber = result;
            let displayed = parseFloat(results.slice(-1));
            screenResult.textContent = displayed.toFixed(5);
            secondNumber;
        } else {
            firstNumber = numberEntered;
            console.log("🚀 ~ firstNumber:", firstNumber);
        }
    })
})
    
calculate.addEventListener('click', (e) => {
    // enteredNumber = parseInt(screen.textContent);
    if (firstNumber !== undefined) {
        secondNumber = numberEntered;
        result = simpleMathFunctions[newOperator](firstNumber, secondNumber);
        console.log("🚀 ~ result:", result)
        results.push(result);
        firstNumber = result;
        displayed = parseFloat(results.slice(-1));
        screenResult.textContent = displayed.toFixed(5);
        secondNumber;
    }
    });
deleteLast.addEventListener('click', (e) => {
    let currentNumbers = screenCalculation.textContent;
    let currentArray = Array.from(currentNumbers);
    currentArray.pop();
    let backToString = currentArray.toString().replace(/,/g, "");
    // secondNumber = backToString;
    numberEntered = backToString
    console.log(numberEntered);
    screenCalculation.textContent = backToString;
})
    
const clear = document.querySelector('#ac');
clear.addEventListener('click', (e) => {
        screenResult.textContent = "";
        screenCalculation.textContent = "";
        results = [];
        firstNumber = undefined;
        secondNumber = undefined;
        lastOperator = undefined;
        newOperator = undefined;
        number = undefined;
        result = undefined;
    })
    
    const simpleMathFunctions = {
        add: (firstNumber, secondNumber) => firstNumber + secondNumber, 
        subtract: (firstNumber, secondNumber) => firstNumber - secondNumber, 
        multiply: (firstNumber, secondNumber) => firstNumber * secondNumber, 
        divide: (firstNumber, secondNumber) => firstNumber / secondNumber, 
    }

// function createAvangers() {
//     if (lastOperator === "divide" && secondNumber === 0) {
//     const newTextField = document.createElement('div');
//     const navbar = document.querySelector('.navbar');
//     newTextField.textContent
//     navbar.appendChild(newTextField);
//     newTextField.textContent = "Hope you don't divide birthday cakes!"
//     }
// }