#! /usr/bin/env node
import inquirer from "inquirer";
// 1: Computer will generate a random number -Done
// 2: user input for guessing number -Done
// 3: compare user input with computer generated number and show result -Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a Number Between 1 to 6:",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulation you guess correct number.");
}
else {
    console.log("You guess wrong number.");
}
