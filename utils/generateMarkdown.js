function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license) {
    return `Project licensed using: [${license} License](https://choosealicense.com/licenses/${license}/).`;
  }
  return "";
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Licensing Information
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}

  ## Table of Contents

  - [Description](#description)
  - [Deployed Application](#deployed)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Screenshot](#screenshot)
  - [Questions](#questions)

  
  ## Description
  ${data.description}

  ## Deployed link
  ${data.link}

  ## Installation Requirements
  ${data.installation}

  ## Application Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Test Commands
  ${data.tests}

  ## Screenshot
  ![screenshot of application](${data.screenshot})

  ## Questions
  For Questions, contact me at ${data.email} or visit [${
    data.github
  }](https://github.com/${data.github})

`;
}


module.exports = generateMarkdown;

// consolidated renderLicenseLink into render license section;
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license) {
//     return `[License](https://choosealicense.com/licenses/${license}/)`;
//   }
//   return "";
// }
// ${renderLicenseLink(data.license)}