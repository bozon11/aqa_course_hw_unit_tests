class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-z]+$/i.test(value))
      throw new Error('Invalid value');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-z]+$/i.test(value))
      throw new Error('Invalid value');
    this._lastName = value;
  }
  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== 'string' || !/^(?=.*[a-z])[a-z\s]+$/i.test(value)) throw new Error('Invalid value');
    this._profession = value;
  }
  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0 || value >= 10000) {
      throw new Error("Emloyee's invoice has an error");
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
      return true;
    }
    throw new Error('Invalid Employee');
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    if (typeof firstName !== 'string') throw new Error('Invalid value');
    const foundEmployee = this.#employees.find((employee) => employee.firstName === firstName);
    if (!foundEmployee) throw new Error('Employee not found');
    return foundEmployee;
  }

  #getEmployeeIndex(firstName) {
    const indexEmployee = this.#employees.findIndex((employee) => employee.firstName === firstName);
    return indexEmployee;
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) throw new Error('Employee not found');
    this.#employees.splice(index, 1);
    return this;
  }

  getTotalSalary() {
    return this.#employees.reduce((totalSum, employee) => (totalSum += employee.salary), 0);
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]
export { Employee, Company };
