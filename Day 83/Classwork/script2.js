let num1 = prompt('Enter a number: ');
let num2 = prompt('Enter another number: ');
let choice = prompt('Choose any of these three operations: + , - , / , *');

if (num1 === 0 || num2 === 0) {
    alert('it cant be 0')
}

else if (choice == '+' && num1.isInteger() && num2.isInteger()) {
    console.log(num1 + num2);
}

else if(choice == '-' && num1.isInteger() && num2.isInteger()) {
    console.log(num1 - num2);
}

else if(choice === '/' && num1.isInteger() && num2.isInteger()) {
    console.log(num1 / num2);
}

else if(choice === '*' && num1.isInteger() && num2.isInteger()) {
    console.log(num1 * num2)
}