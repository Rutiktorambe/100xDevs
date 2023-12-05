// 1. Write a function that finds the sum of two numbers 
let num1 = 10;
let num2 = 20;

function findSum(a, b) {
    return a + b;
}

let result = findSum(num1, num2);
console.log("The sum is:", result); 

// 2. Write another function that displays this result in a pretty format 

function displaySum(a, b) {
    let sum = a + b;
    console.log(`The sum of ${a} and ${b} is: ${sum}`);
}
displaySum(num1, num2); 

// 3. Write another function that takes this sum and prints it in passive tense

function printPassiveSum(sum) {
    console.log(`The sum has been calculated as: ${sum}`);
}

printPassiveSum(result); 
