function Employee(name) {
    this.name = name;

    function displayInfo() {
        console.log(`Имя сотрудника: ${this.name}`);
    }
}

function Manager(name, department) {
    this.department = department;

    function displayInfo() {
        console.log(`Имя менеджера: ${this.name}`);
        console.log(`Отдел: ${this.department}`);
    }

    // this.__proto__ = Employee(name);
    // Manager.prototype = Employee(name);
}

Object.setPrototypeOf(Manager, Employee)

// Пример использования классов
const employee = new Employee("John Smith");
console.log(employee);
employee.displayInfo(); // ошибка, не может найти метод
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

