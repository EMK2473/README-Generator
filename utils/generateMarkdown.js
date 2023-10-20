// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== 'none') {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://choosealicense.com/licenses/${license}/)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Project licensed under [${license} License](https://choosealicense.com/licenses/${license}/).`;
  }
    return "";
}

// TODO: Create a function to generate markdown for README


// figure out render functions in README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Licensing
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  

  ## Description
  ${data.description}

  ## Deployed link
  ${data.link}

  ## Screenshot
  ![screenshot of application](${data.screenshot})

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributions}

  ## Test Commands
  ${data.tests}

  ## Questions
  For Questions, contact me at ${data.email} or visit [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
