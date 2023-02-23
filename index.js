const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const licenseChoices = [
    {
        value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        name: "Apache 2.0"
    },
    {
        value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        name: "MIT"
    },
    {
        value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        name: "GPL 3.0"
    },
    {
        value: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        name: "BSD 3"
    },

]

// array of questions for user

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project called?"
        },

        {
            type: "input",
            name: "description",
            message: "What is your project description"
        },

     

        {
            type: "input",
            name: "installation",
            message: "How do you install this project"
        },

        {
            type: "input",
            name: "usage",
            message: "How do you use this project"
        },

        {
            type: "list",
            name: "license",
            message: "What licence does this project use",
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },

        {
            type: "input",
            name: "contribution",
            message: "Who contributed to this project"

        },

        {
            type: "input",
            name: "tests",
            message: "How did you test this project"
        },

        {
            type: "input",
            name: "questions",
            message: "Enter your email address"
        },

        {
            type: "input",
            name: "github",
            message: "Enter your Github here"
        },

    ])

    .then((answer) => {
        // Use user feedback for the questions


        {
            fs.writeFile(path.join(process.cwd() + "/finished/", 'readme.md'),
                generateMarkdown(answer), (err) => err && console.error(err))

        }
    });


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
