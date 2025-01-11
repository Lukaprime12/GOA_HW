// Task 0
function getDayName(day) {
    switch (day) {
        case 1:
            console.log("Monday")
        case 2:
            console.log("Tuesday")
        case 3:
            console.log("Wedsnesday")
        case 4:
            console.log("Thursday")
        case 5:
            console.log("Friday")
        case 6:
            console.log("Saturday")
        case 7:
            console.log("Sunday")
        default:
            console.log("Wrong Day")
    }
}



// Task 1
function tern(num) {
    switch(num) {
        case num % 2 == 0:
            console.log("Your number was EVEN")
        

        case num % 2 > 0:
            console.log("Your number was ODD")
    }
}


// Task 2
function app(weather) {
    switch(weather) {
        case weather == 1:
            console.log("It's a sunny day")

        case weather == 2:
            console.log("It's rainy day")

        case weather == 3:
            console.log("It's foggy day")
            
        case weather == 4:
            console.log("It's a windy day")

        default:
            console.log("Weather is not defined")
    }
}



// Task 3
function getMonthInfo(monthNumber) {
    let monthName;

    switch (monthNumber) {
        case 1: 
        monthName = "January"; 
        break;
        case 2: 
        monthName = "February"; 
        break;
        case 3: 
        monthName = "March"; 
        break;
        case 4:
            monthName = "April";
        break;
        case 5: 
        monthName = "May"; 
        break;
        case 6: 
        monthName = "June"; 
        break;
        case 7: 
        monthName = "July"; 
        break;
        case 8: 
        monthName = "August"; 
        break;
        case 9: 
        monthName = "September"; 
        break;
        case 10: 
        monthName = "October"; 
        break;
        case 11: 
        monthName = "November"; 
        break;
        case 12: 
        monthName = "December"; 
        break;
        default:
            console.log("Invalid month");
    }

    let halfOfYear;
    if (monthNumber >= 1 && monthNumber <= 6) {
        halfOfYear = "First half";
    } else if (monthNumber >= 7 && monthNumber <= 12) {
        halfOfYear = "Second half";
    } else {
        console.log("Invalid month");
    }

    console.log(`Switch -> "${monthName}" , "${halfOfYear}"`);
}