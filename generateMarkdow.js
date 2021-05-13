// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
    return `# ${data.title.toUpperCase()}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## How to Contribute
${data.contribution}

## Tests
${data.tests}

## License
${data.license}

## Questions
Github profile: ${data.github}\n
Email address: ${data.email}\n
Instructions to reach me by email: ${data.howToReachEmail}`;
}

module.exports = { generateMarkdown };
