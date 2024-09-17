//ask the user to input a number
let number = prompt("Enter a number to generate its multiplication table:");

//convert the input to a number in case it's entered as a string
number = parseInt(number);

//iterate from 1 to 10
for (let i = 1; i <= 10; i++) {
    // multiply the user's number by the current loop counter (i) and display the result
    alert(`${number} x ${i} = ${number * i}`);
}
