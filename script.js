// need to create a script that creates an html

// import the employees
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');

// create modules required for node
const fs = require('fs'); 
const inquirer = require('inquirer');

// team members are going to be added inside an array
teamMembers = [];

// prompt user to add employee information
// repeat this for all the requirements from the super + 1
const addEngineer = () => {
    //prompt the inquirer
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer',
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter the engineer's name");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the ID for the engineer',
            validate: idInput => {
                if (!idInput) {
                    console.log("Please enter the engineer's ID");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the engineer',
            validate: emailInput => {
                if (!emailInput) {
                    console.log("Please enter the engineer's name");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'gitthub',
            message: 'What is the Github of the engineer',
            validate: githubInput => {
                if (!githubInput) {
                    console.log("Please enter the engineer's Github");
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    ])
}