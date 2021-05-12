// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please, add the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines for your app.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run your tests for your app.',
    },
    {
        type: 'checkbox',
        message: 'Add a license',
        name: 'license',
        choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the link to your GitHub profile',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
    },
    {
        type: 'input',
        name: 'howToReachEmail',
        message: 'Enter instructions on how to reach you via email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();