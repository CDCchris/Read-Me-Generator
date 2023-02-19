const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: "contents",
    message: "What are the table of contents"
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
    type: "input",
    name: "license",
    message: "What licence does this project use"
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

    
    {fs.writeFile(path.join(process.cwd() + "/finished/",'readme.md'),
     generateMarkdown(answer), (err) => err && console.error(err))
       // fs.writeFile('readme.md', generateMarkdown(answers) , () => {
       //             if (err)
       //             console.log;(err);
       //             else {
       //                 console.log("File written successfully\n")
       //             }
       // })

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
