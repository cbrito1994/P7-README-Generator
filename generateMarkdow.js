// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseNoSpaces = license[0].split(' ').join('');
    return `https://img.shields.io/static/v1?label=license&message=${licenseNoSpaces}&color=brightgreen`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let response;
    if(license){
        switch(license[0]){
            case 'MIT License':
                response = 'https://choosealicense.com/licenses/mit/';
                break;
            case 'GNU AGPLv3':
                response = 'https://choosealicense.com/licenses/agpl-3.0/';
                break;
            case 'Mozilla Public License 2.0':
                response = 'https://choosealicense.com/licenses/mpl-2.0/';
                break;
            case 'Apache License 2.0':
                response = 'https://choosealicense.com/licenses/apache-2.0/';
                break;
            case 'Boost Software License 1.0':
                response = 'https://choosealicense.com/licenses/bsl-1.0/';
                break
            case 'The Unlicense':
                response = 'https://choosealicense.com/licenses/unlicense/';
                break
            default:
                response = 'No link found';
        }
        return response;
    } else {
        response = '';
    }
    return response;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
    return `# ${data.title.toUpperCase()}
![license](${renderLicenseBadge(data.license)})

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
${data.license}\n
Link to the license info: ${renderLicenseLink(data.license)}

## Questions
Github profile: ${data.github}\n
Email address: ${data.email}\n
Instructions to reach me by email: ${data.howToReachEmail}`;
}

module.exports = { generateMarkdown };
