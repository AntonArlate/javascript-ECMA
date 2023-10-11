// START task

class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}`);
    }
}

// END task

module.exports = Employee;
