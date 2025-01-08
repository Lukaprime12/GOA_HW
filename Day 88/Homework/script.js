// Task 0
const password = 'Group 41 is best';
let attempts = 3;

while (attempts > 0) {
    let userInput = prompt("Enter the password");
    if (userInput == password) {
        alert("Your entered password is correct");
        break;
    } else {
        attempts--;
        if (attempts > 0) {
            alert(`Incorrect password. You have ${attempts} attempts left.`);
        } else {
            alert("You have run out of attempts");
        }
    }
}


// Task 1
function factorial(num) {
    if (num < 0) {
        console.log("You can't enter negative number");
    }
    let result = 1;
    for (let i = 0; i < num; i++) {
        result *= i;
    }
    return result;
}


// Task 2
let sec = 100;
while (sec > 0) {
    sec--;
    console.log(`You have ${sec} seconds left`);
}