const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    //getter for intern's school
    getSchool() {
        return this.school;
    }
}

// export later
module.exports = Intern;