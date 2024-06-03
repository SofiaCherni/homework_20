let getOption = prompt('choose action: add, sub, mult, div', 'add')
.trim()
.toLowerCase();

let firstNumber = +prompt('enter first number').trim();
let secondNumber = +prompt('enter second number').trim();

const checkIsNaN = !isNaN(firstNumber) && !isNaN(secondNumber);

if (getOption === "add" && checkIsNaN){
    document.write(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (getOption === "sub" && checkIsNaN) {
    document.write(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (getOption === "mult" && checkIsNaN) {
    document.write(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (getOption === "div" && checkIsNaN) {
    document.write(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
} else {
    document.write(` ERROR`);
}
