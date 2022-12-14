// import the already created employee class
const Employee = require('./employee');

// start creating manager, super constructor for id name and email
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    // getters
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

    
}

// export later
module.exports = Manager;