// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadMe = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project ?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message:"What are the Installation steps for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage of your project?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the appropriate license?",
    choices: ["MIT", "Apache",  "IBM","Boost", "none"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Would you like other developers to contribute?",
  },
  {
    type: "input",
    name: "test",
    message: "Did you write any test for your application?",
  },
  {
    type: "input",
    name: "username",
    message: "Please provide your gitHub username ?",
    
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address?",
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateReadMe(data), (err) =>{
        if (err)
        console.log(err);
        else{
            console.log("sucess! Readme is generated")
        }
    })

};

// TODO: Create a function to initialize app
function init() { 
console.log("welcome to Node !! Generate a Read me");
inquirer.prompt(questions).then((response)=>{
    writeToFile('./README.md', response)
    console.log(response);

});
}
// Function call to initialize app
init();
