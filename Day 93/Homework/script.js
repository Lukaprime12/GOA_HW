// Task 0
function recommendTransport() {
    const name = prompt("შეიყვანეთ თქვენი სახელი:");
    const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"), 10);
    const distance = parseInt(prompt("სამუშაო ადგილამდე მანძილი (კმ-ში):"));
    const workDays = parseInt(prompt("სამუშაო დღეების რაოდენობა კვირაში (0-დან 7-მდე):"), 10);
    age < 16 ? console.log("გთხოვთ, მოითხოვოთ გამგზავრების ნებართვა უფროსისგან") : console.log(
              distance <= 5 ? "რეკომენდირებული ტრანსპორტი არის ველოსიპედი" : distance <= 20 ? "რეკომენდირებული ტრანსპორტი არის მანქანა" : "რეკომენდირებული ტრანსპორტი არის მატარებელი"
          );
    workDays >= 5
        ? console.log("გთხოვთ, სთხოვოთ შეღავათები ტრანსპორტზე")
        : "";
}


// Task 1
let info1 = prompt("How much do u run daily: ");
let info2 = prompt("What is your  name: ");
let info3 = prompt("What is your last name: ");
let info4 = prompt("How much do u exercise per week: ");
let info5 = prompt("What is your age: ");

info5 < 16 || info5 > 60 ? console.log("I advise seeking doctor Mr." , info2 , info3) : "";
info1*7 <= 20 ? console.log("You can exercise some more Mr." , info2 , info3) : "";