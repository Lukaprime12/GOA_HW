// Task 0
function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    return a + b > c && b + c > a && c + a > b;
}

// Task 1
let system = prompt("Enter electronic ფოსტა: ");
let ele = "Goa Best !";
console.log("Access Granted") ? system === ele : "";
console.log("Access Not Granted") ? system !== ele : "";



// Task 2
let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter another number: ");
console.log("Both are equal") ? num1 === num2 : "";
console.log("First number is more") ? num1 > num2 : "";
console.log("Second number is more") ? num1 < num2 : "";


// Task 3
let age = prompt("Enter your age: ");
let gender = prompt("Enter a VALID gender , Male AND Female: ")
let income = prompt("Enter your monthly income: ");
if (age >= 18 && income >= 5000 && gender === "Female") {
    console.log("Your income is average");
} else if (age >= 18 && income < 5000 && income > 3000 && gender === "Female") {
    console.log("Your plan should be better");
} else if (age >= 18 && income < 3000 && gender === "Female") {
    console.log("Your plan should be better ASAP");
} else if (gender === "Male" && income >= 6000 && age >= 18) {
    console.log("You are ready to invest");
} else if (age >= 18 && gender === "Male" && income < 6000 && income > 3000) {
    console.log("Your income is stable");
} else if (age >= 18 && gender === "Male" && income < 3000) {
    console.log("You need to change your plan");
} else if (age < 18) {
    console.log("You are a kid წადი მოფსი დაიძინე");
}


// Task 4
function getFinancialAdvice(age, gender, income) {
    if (age < 18) {
        console.log("Get an education and then start investing");
        return;
    }
    switch (gender) {
        case "female":
            switch (true) {
                case income > 5000:
                    console.log("Your financial situation is secure");
                    break;
                case income <= 5000 && income > 3000:
                    console.log("Financial position is stable. A better plan is needed.");
                    break;
                case income <= 3000:
                    console.log("You need to improve your financial plan");
                    break;
            }
            break;
        case "male":
            switch (true) {
                case income > 6000:
                    console.log("You are ready for investments!");
                    break;
                case income <= 6000 && income > 4000:
                    console.log("Income is stable");
                    break;
                case income <= 4000:
                    console.log("You need to improve your financial plan");
                    break;
            }
            break;
        default:
            console.log("Please specify the gender correctly");
    }
}


// Task 5
let Age = prompt("Enter your age please: ");
let Mark = prompt("Enter a mark: ");
console.log("You are successful") ? Age >= 18 && Mark >= 50 : "";
console.log("You aren't successful") ? Age >= 18 && Mark <= 50 : "";
console.log("You are a kid YET , BUT YOU CAN STILL BE SUCCESSFUL!") ? Age < 18 : "";


// Task 6
let sum = 0;
for (let i = 1; i<= 100 ; i++) {
    if (i%2 == 0) {
        console.log('')
    } else{
        sum += i
    }
}


// Task 7
let summ = 0;
I = 1;
while (I < 100) {
    if (I % 2 == 0) {
        return "";
    } else {
        summ += I;
    }
    I++
}



// Task 8
let num = 1;
while (num <= 50) {
  if (num === 25) {
    num++;
    continue;
  }
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}