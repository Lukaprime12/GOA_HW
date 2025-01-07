// Task 0
let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log("The sum of the numbers is ${sum}");


// Task 1
let sum2 = 0;
for (let i = 0 ; i < 10 ; i++) {
    console.log("The square is ${i * i}");
}


// Task 2
let word = "Hello";
for (let i = 0;i < word.length;i++) {
    console.log(word[i])
}


// Task 3
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }