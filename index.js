// need to create a script that creates an html
const createHTML = require('./createHTML');
// import the employees

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// create modules required for node
const fs = require('fs'); 
const path = require("path");
const inquirer = require('inquirer');

// team members are going to be added inside an array
teamMembers = [];

// prompt user to add employee information
// repeat this for all the requirements from the super + 1
// should start with add manager instead of addEngineer
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager',
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter the managers's name");
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
            message: 'What is the ID of the engineer',
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter the manager's ID");
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
            message: 'What is the email of the manager',
            validate: emailInput => {
                if (!emailInput) {
                    console.log("Please enter the manager's email");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number',
            validate: officeInput => {
                if (!officeInput) {
                    console.log("Please enter the manager's office number");
                    return false;
                }
                else {
                    return true;
                }
            }
        },

    ])
    // create a .then function that will allow the creation of a new manager
    .then(managerInput => {
        const { name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        console.log(manager);
    })
}

// use the method new employee since there is only one manager
const addingEmployee = () => {
    console.log('Adding new employees to the system');
    //prompt the inquirer
    return inquirer.prompt ([
        { // specify whether they are an intern or an engineer
            type: 'list',
            name: 'role',
            message: 'What is the employee\'s role',
            choices: ['Intern', 'Engineer']
        },

        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee',
            choices: ['Engineer', 'Intern'],
            validate: nameInput => {
                if (!nameInput) {
                    console.log("Please enter the employees's name");
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
            name: 'school',
            message: 'What school does the intern go to',
            // create a statement if the input role is an intern this will appear
            when: (input) => input.role === 'Intern',
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
            name: 'gitthub',
            message: 'What is the Github of the engineer',
            // create a statement if the input role is engineer this will appear
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (!githubInput) {
                    console.log("Please enter the engineer's Github");
                    return false;
                }
                else {
                    return true;
                }
            }
        },
        // add a confirm button to add the employee or not
        {
            type: 'confirm',
            name: 'confirmAddition',
            message: 'Would you like to add more team members?'
        }
    ])

    .then(employeeInput => {
        let { name, id, email, role, github, school, confirmAddition } = employeeInput
        let newEmployee;

        if (role === 'Engineer') {
            newEmployee = new Engineer (name, id, email, role, github);
            console.log(newEmployee);
        }


        else if (role === 'Intern') {
            newEmployee = new Intern (name, id, email, school);
            console.log(newEmployee);
        }

        // push employee into array
        teamMembers.push(newEmployee);

        // to continue adding employees after the confirmation we should use an if statement
        // confirmaddition was giving an error due it being in the return statement
        if (confirmAddition) {
            return addingEmployee(teamMembers);
        }
        else {
            return teamMembers;
        }
    })
}

const writeFile = data => {
    fs.writeFile('./index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

// run the functions
addManager()
// after add manager we add employees
    .then(addingEmployee)
// after adding employees we can push it into the teamMember array
    .then(teamMembers => {
        return createHTML(teamMembers);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
    console.log(err);
     });