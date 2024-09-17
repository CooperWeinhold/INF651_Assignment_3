let dayNumber;

do {
    dayNumber = prompt("Enter a number between 1 and 7 to find the corresponding day of the week:");
    
    dayNumber = parseInt(dayNumber);

    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        alert("Invalid input. Please enter a number between 1 and 7.");
    }
} while (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7); 


switch (dayNumber) {
    case 1:
        alert("The day is Sunday.");
        break;
    case 2:
        alert("The day is Monday.");
        break;
    case 3:
        alert("The day is Tuesday.");
        break;
    case 4:
        alert("The day is Wednesday.");
        break;
    case 5:
        alert("The day is Thursday.");
        break;
    case 6:
        alert("The day is Friday.");
        break;
    case 7:
        alert("The day is Saturday.");
        break;
}

