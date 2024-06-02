#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1-6",
    }
]);
if (answers.userGuessNumber === randomnumber) {
    console.log("congratulations!you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
