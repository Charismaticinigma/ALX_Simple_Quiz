function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    console.log(`Number 1: ${number1}, Number 2: ${number2}`);
    return { number1, number2 };
}

// Function to display result
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Add function
function add(number1, number2) {
    return number1 + number2;
}

// Subtract function
function subtract(number1, number2) {
    return number1 - number2;
}

// Multiply function
function multiply(number1, number2) {
    return number1 * number2;
}

// Divide function
function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    } else {
        return number1 / number2;
    }
}

// Add event listeners to buttons
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = add(number1, number2);
    console.log(`Addition result: ${result}`);
    displayResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = subtract(number1, number2);
    console.log(`Subtraction result: ${result}`);
    displayResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = multiply(number1, number2);
    console.log(`Multiplication result: ${result}`);
    displayResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getInputValues();
    const result = divide(number1, number2);
    console.log(`Division result: ${result}`);
    displayResult(result);
});