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
      "agpl-3.0",
      "mpl-2.0",
      "apache-2.0",
      "mit",
      "bsl-1.0",
      "unlicense",
      "None"
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
    name: "github",
    message: "Enter GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address:",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Enter path to screenshot:",
  },
  {
    type: "input",
    name: "link",
    message: "Enter deployed link URL:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  };

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(`Generating README.md file`);
    writeToFile("./dist/README.md", generateMarkdown({...responses}));
  });
}

// Function call to initialize app
init();
