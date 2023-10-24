function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/${license}-blue.svg)`;
  } else {
    return `![Github license](https://img.shields.io/badge/no-license-blue.svg)`;
  }
}

function renderLicenseSection(license) {
  if (license === "none") {
    return `No license added`;
  } else {
    return `Project licensed using: [${license} License](https://choosealicense.com/licenses/${license}/).`;
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation-requirements)
  - [Usage](#application-usage)
  - [License](#licensing-information)
  - [Contributions](#contributions)
  - [Tests](#tests-commands)
  - [Video Link](#link-to-video-instructions)
  - [Screenshot](#screenshot)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation Requirements
  ${data.installation}

  ## Application Usage
  ${data.usage}

  ## Licensing Information
  ${renderLicenseSection(data.license)}
  
  ## Contributions
  ${data.contributions}

  ## Test Commands
  ${data.tests}

  ## Link to Video Instructions
  ${data.video}

  ## Screenshot
  ![screenshot of application](${data.screenshot})

  ## Questions
  For Questions, contact me at ${data.email} or visit My Github: [${
    data.github
  }](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
