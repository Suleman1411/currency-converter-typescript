import inquirer from "inquirer";
let Conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0029,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.23,
        "PKR": 339.28,
        "GBP": 1
    },
    "USD": {
        "PKR": 276.64,
        "GBP": 0.82,
        "USD": 1
    }
};
(async () => {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "GBP", "USD"],
            message: "Select your currency: "
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "GBP", "USD"],
            message: "Which currency would you like to convert: "
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your conversion amount: "
        }
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = Conversion[from][to] * amount;
        console.log(`Your conversion from ${from} to ${to} is ${result}`);
    }
    else {
        console.log("Invalid Inputs");
    }
})();
