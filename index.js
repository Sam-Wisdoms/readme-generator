const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
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
        {
            type: 'checkbox',
            name: 'content',
            message: 'What is the table of content of your project?',
            choices: [
                '\n Title ', 
            '\n About ', '\n Installation ', '\n Usage ', '\n Licenses ', '\n Contribution Guide ', '\n Testing ', '\n How to ask questions ']
        },
        {
            type: 'checkbox',
            name: 'installation',
            message: 'What is the installation guide for your project?',
            choices: ['\n Download ', '\n Next ', '\n Next ', ' \n Install' ]
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can the project be used?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which licenses are required to use your project?',
            choices: ['\n MIT ', '\n Apache License ', '\n GPL ']
        },
        {
            type: 'input',
            name: 'contribution',       
            message: 'How can people contribute to use your project?'
        },
        {
            type: 'checkbox',
            name: 'testing',
            message: 'Which testings have you done to ensure your project is complete?',
            choices: ['\n Smoke Testing', '\n System Testing', '\n Exploratory Test', '\n Usability Test']
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How can people ask questions about your project?'
        },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Successful')
        }
    })

}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) =>{
            writeToFile('README.md', generateMarkdown(answers))
        })
}

// function call to initialize program
init();
