function calculateGrade() {
    let score1 = parseInt(prompt("შეიყვანეთ პირველი საგნის ქულა:"));
    let score2 = parseInt(prompt("შეიყვანეთ მეორე საგნის ქულა:"));
    let score3 = parseInt(prompt("შეიყვანეთ მესამე საგნის ქულა:"));
    let average = (score1 + score2 + score3) / 3;
    let grade = 
      average > 90 && average <= 100 ? "A" :
      average > 70 && average <= 80 ? "B" :
      average > 50 && average <= 65 ? "C" :
      average > 25 && average <= 50 ? "D" :
      average <= 25 ? "წადი ისწავლე და მერე მოდი" :
      "არასწორი ქულები";
    console.log(`სტუდენტის საშუალო ქულა: ${average.toFixed(2)}`);
    console.log(`შეფასება: ${grade}`);
}