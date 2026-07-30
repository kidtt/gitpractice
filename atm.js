let password = prompt("Enter your password:");
let balance = 100;

if (password == "1234") {

    let amount = Number(prompt("Enter amount to withdraw:"));

    if (amount <= balance) {
        balance = balance - amount;

        alert("Withdrawal successful!");
        alert("Remaining Balance: " + balance);

    } else {
        alert("Insufficient balance!");
    }

} else {
    alert("Incorrect password!");
}

