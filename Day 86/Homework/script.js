// Task 0
let num1 = prompt('Enter a number: ');
let num2 = prompt('Enter another number');
let operator = prompt('Enter a mathematical operator: ')
if (num1 == 0 || num2 == 0) {
    alert("All numbers must be more than 0")
}

else if (num1 > 100 || num2 > 100) {
    alert("The number must be more than 0 and less than 100")
}
function calculator(operator) {
    if(operator == "+") {
        console.log(num1 + num2)
    } else if(operator == "-" && num1 < num2) {
        console.log("If you want to do - , than first number must be more than second number")
    } else if(operator == "-" && num1 > num2) {
        console.log(num1 - num2)
    } else if(operator == "*") {
        console.log(num1 * num2)
    } else if(operator == "/" || operator == "//" && num1 < num2) {
        console.log("First number must be more than second")
    } else if(operator == "/") {
        console.log(num1 / num2)
    } else if(operator == "//") {
        console.log(num1 / num2)
    }
}



// Task 1
let num = prompt("Enter any number: ");
function check(char) {
    if(num % 2 == 0) {
        alert("The number is EVEN")
    } else{
        alert("The number is ODD")
    }
}



// Task 2
let number = prompt("Enter a number: ");
function sqr(squ) {
    alert(`square root of you number is ${number * number}`)
}



// Task 3
let num4 = prompt("Enter a number: ");
function checki(ch) {
    if (num4 < 0) {
        alert("Your number is negative :)")
    } else if (num4 > 0) {
        alert("Your number is positive :)")
    } else if(number == 0) {
        alert("your number is 0")
    }
}