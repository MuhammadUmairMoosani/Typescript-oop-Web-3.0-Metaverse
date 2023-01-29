#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
class Person {
    // Declare a field to represent the personality
    personality = "";
    Person() {
        this.personality = "Mystery";
    }
    AskQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extravert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a Mystery";
        }
    }
    // This method returns the value of the Personality
    GetPersonality() {
        return this.personality;
    }
}
// Here we can either write or read data to this class
class Student extends Person {
    constructor() {
        super();
    }
    // private field (backing field) hold any data assigned Name property
    _name = "";
    Student() {
        this._name = "";
    }
    // This is the Name property assigned
    // use the Get accessor to read data from the class
    get() {
        return this._name;
    }
    set(name) {
        this._name = name;
    }
}
console.log("Type 1 if you like to talk to others and type 2 if you would rather keep to yourself: ");
let input = await inquirer.prompt({
    type: "number",
    name: "personalityNumber",
    message: "Please enter your personality",
});
let inputName = await inquirer.prompt({
    name: "name",
    message: "Please enter your name",
});
const { personalityNumber } = input;
const { name } = inputName;
if (personalityNumber) {
    let myPerson = new Person();
    myPerson.AskQuestion(personalityNumber);
    console.log("You are: " + myPerson.GetPersonality());
    // Student class
    const myStudent = new Student();
    myStudent.set(name);
    console.log("Your name is: " + myStudent.get() + " and your personality type is: " + myStudent.GetPersonality());
}
else {
    console.log(chalk.red("Please enter a valid number"));
}
