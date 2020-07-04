const fs = require ("fs")
const util = require ("util")
const inquirer = require ("inquirer")

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the Title of your application?",
    name: "title"
},
{
    type: "input",
    message: "Describe your application.",
    name: "description"
},
{
    type: "input",
    message: "Tell me a little about yourself.",
    name: "bio"
},
{
    type: "input",
    message: "What is your LinkedIn URL?",
    name: "LinkedIn"
},
{
    type: "input",
    message: "What is your GitHub URL?",
    name: "GitHub"
}];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
