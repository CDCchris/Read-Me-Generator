const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

inquirer
  .prompt([
   {
    type: "input",
    name: "Title",
    message: "what is your project called?"
   },

   {
    type: "input",
    name: "Description",
    message: "what is your project description"
   },

   {
    type: "input",
    name: "Table of Contents",
    message: "What are the table of contents"
   },

   {
    type: "input",
    name: "Installation",
    message: "How do you install this project"
   },

   {
    type: "input",
    name: "Usage",
    message: "How do you use this project"
   },

   {
    type: "input",
    name: "License",
    message: "What licence does this project use"
   },

   {
    type: "input",
    name: "Contribution",
    message: "Who contributed to this project"
   },

   {
    type: "input",
    name: "Tests",
    message: "How did you test this project"
   },

   {
    type: "input",
    name: "Questions",
    message: "If you have any questions contact me"
   },

])


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
