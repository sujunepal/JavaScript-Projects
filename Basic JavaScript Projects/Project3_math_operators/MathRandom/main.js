// Addition function
function addition() {
    const num1 = 5;
    const num2 = 3;
    const result = num1 + num2;
    return result;
}

// Subtraction function
function subtraction() {
    const num1 = 10;
    const num2 = 4;
    const result = num1 - num2;
    return result;
}

// Multiplication function
function multiplication() {
    const num1 = 6;
    const num2 = 7;
    const result = num1 * num2;
    return result;
}

// Modulo function
function modulo() {
    const num1 = 17;
    const num2 = 5;
    const result = num1 % num2;
    return result;
}

// Increment function
function increment() {
    let num = 3;
    num++;
    return num;
}

// Decrement function
function decrement() {
    let num = 9;
    num--;
    return num;
}

// Random number function
function getRandomNumber() {
    const randomNumber = Math.random();
    return randomNumber;
}

// Event handlers
document.getElementById('addBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Result: ' + addition();
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Result: ' + subtraction();
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Result: ' + multiplication();
});

document.getElementById('moduloBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Result: ' + modulo();
});

document.getElementById('incrementBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Result: ' + increment();
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Result: ' + decrement();
});

document.getElementById('randomBtn').addEventListener('click', function() {
    document.getElementById('output').textContent = 'Random Number: ' + getRandomNumber();
});
