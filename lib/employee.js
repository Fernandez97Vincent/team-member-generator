// start by creating the employee base
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // start the getters
    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    getEmployee() {
        return 'Employee';
    }
    
}

// need to export