// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const generateMarkdown = require(`./utils/generateMarkdown`);
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter description for project:",
  },
  {
    type: "input",
    name: "table of contents",
    message: "Enter project table of contents:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter dependencies required for installation:",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe project usage:",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select license for project:",
    choices: [
      "GNU",
      "MIT",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "Boost",
      "Creative Commons Zero",
      "Eclipse Public",
      "GNU v3.0",
      "GNU v2.0",
      "GNU v2.    1",
      "Mozilla",
      "Unlicense",
    ],
  },
  {
    type: "input",
    name: "contributions",
    message: "Enter project contributors:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter commands for project testing:",
  },
  {
    type: "input",
    name: "questions",
    message: "Enter GitHub username:",
  },
  {
    type: "input",
    name: "contact",
    message: "Enter email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
