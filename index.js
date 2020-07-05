const fs = require ("fs")
const util = require ("util")
const inquirer = require ("inquirer")

const licenseBadges = ["[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"]

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the name of your application? (This will be your ReadMe Title)",
    name: "title"
},
{
    type: "input",
    message: "Describe what your application does.",
    name: "description"
},
{
    type: "input",
    message: "What are the installation instructions?",
    name: "installation"
},
{
    type: "input",
    message: "How is this app meant to be used?",
    name: "usage"
},
{
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contributions"
},
{
    type: "input",
    message: "Please any test instructions.",
    name: "test"
},
{
    type: "list",
    message: "Choose a license for your application.",
    choices: ["BSD", "MIT", "GPL"],
    name: "license"
},
{
    type: "input",
    message: "Enter your GitHub username.",
    name: "gitHub"
},
{
    type: "input",
    message: "Enter your email address.",
    name: "email"
},
{
    type: "input",
    message: "Enter any instructions on how to reach you with additional questions.",
    name: "questions"
}];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
