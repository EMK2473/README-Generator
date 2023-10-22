const fs = require(`fs`);
const path = require(`path`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);

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
    type: "list",
    name: "license",
    message: "Select license for project:",
    choices: [
      "agpl-3.0",
      "mpl-2.0",
      "apache-2.0",
      "mit",
      "bsl-1.0",
      "unlicense",
      "none",
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
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(`README.md file Generated and/or Updated.`);
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();
