// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');
let fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?","What is the title of your project?","Please Enter installation insructions as a list, seperated by a comma:",
"Please enter usage information for your project:","Please enter contribution guidelines for your project:","Please enter test information for your project:",
"Please enter your GitHub Username:","Please Enter your email address:","Select a licence?"];

inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "install"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "testing"
        },
        {
            type: "input",
            message: questions[6],
            name: "github"
        },
        {
            type: "input",
            message: questions[7],
            name: "email"
        },
        {
            type: "list",
            message: questions[8],
            name: "license",
            choices: [
                "MIT License",
                "Code Project Open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Microsoft Public License (Ms-PL)",
                "Mozilla Public License 1.1 (MPL 1.1)",
                "Common Public License Version 1.0 (CPL)",
                "Eclipse Public License 1.0",
                "Apache License, Version 2.0"
            ]
        }
    ])
    .then((res) => {
        console.log('README File generating...');
        writeToFile('readme',generateMarkdown(res));
    })
    .catch((err) => {
        console.log(err);
    })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./Generated-README.md",collatedAnswers,(err) => {
        if (err) {
            throw err;
        } 
        else {
            console.log("Successfully Generated README")
        }
    })
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
