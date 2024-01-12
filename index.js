const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// come up with README.md file default structure
// Decide questions to ask and the question format
// Generate the README.md content based on the user input
// Write to README.md file

// array of questions for user
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project about?'
        },
        {
            type: 'input',
            name: 'content',
            message: 'What is the table of content of your project?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What installations are needed to use the project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can the project be used?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Which licenses are required to use your project?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can people contribute to use your project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Which testings have you done to ensure your project is complete?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How can people ask questions about your project?'
        },
];

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your project about?'
            },

        ])
        .then((answers) =>{
            const readmeContent = generateMarkdown(answers)
        })
}

// function to write README file
function writeToFile(fileName, data) {

}

// function call to initialize program
init();