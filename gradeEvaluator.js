let userScore;

do{
    userScore = prompt("Enter your score, 0-100.");

    userScore = parseInt(userScore)

    if (isNaN(userScore) || userScore < 0 || userScore > 100)
    {
    alert("Invalid input, enter a valid score between 0-100");
    }
} while (isNaN(userScore) || userScore < 0 || userScore > 100)

    let grade;

    if (userScore >= 90 && userScore <= 100)
    {
        grade = 'A';
    }
    else if (userScore >= 80 && userScore <= 89)
    {
        grade = 'B';
    }
    else if (userScore >= 70 && userScore <= 79)
    {
        grade = 'C';
    }
    else if (userScore >= 60 && userScore <= 69)
    {
        grade = 'D';
    }
    else 
    {
        grade = 'F';
    }

    alert ('Your grade is: '+ grade);

