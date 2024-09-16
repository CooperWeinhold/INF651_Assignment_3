let password1;
let password2;

do { 
    password1 = prompt("Set a password");
    password2 = prompt("Re-enter password");

    if (password1 !== password2) {
        alert("Passwords do not match, please try again.");
    }
} while (password1 !== password2);

alert("Password set successfully!");
