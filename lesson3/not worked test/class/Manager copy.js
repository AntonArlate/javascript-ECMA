const Employee = require('./Employee copy');

// START task

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Имя менеджера: ${this.name}`);
        console.log(`Отдел: ${this.department}`);
    }
}

// END task

module.exports = Manager;
