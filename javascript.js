const buttons = document.querySelectorAll('.button.grey');
const screen = document.querySelector('.screen');
const numbers = {
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8,
    nine: 9, zero: 0
};
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
            const number = numbers[e.target.classList[2]];
            screen.textContent = number;
    })
});

const calculationParts = {}

const simpleMathFunctions = {
    add: (firstNumber, secondNumber) => firstNumber + secondNumber, 
    subtract: (firstNumber, secondNumber) => firstNumber - secondNumber, 
    multiply: (firstNumber, secondNumber) => firstNumber * secondNumber, 
    divide: (firstNumber, secondNumber) => firstNumber / secondNumber, 
}




// calculationParts.firstNumber = parseInt(prompt("First Number"));
// let operator = prompt("What do you want to do with numbers?");
// calculationParts.secondNumber = parseInt(prompt("Second Number"));
// console.log(typeof(calculationParts.firstNumber));
// console.log(typeof(calculationParts.secondNumber));

// console.log(simpleMathFunctions[operator](calculationParts.firstNumber, calculationParts.secondNumber));

// function operate() {

// };