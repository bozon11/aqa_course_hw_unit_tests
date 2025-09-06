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

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = [], profession = 'Developer') {
    super(firstName, lastName, profession, salary);
    this.programmingLanguages = programmingLanguages;
  }

  addProgrammingLanguage(language) {
    if (typeof language === 'string' && language.length > 0) {
      this.programmingLanguages.push(language);
      return true;
    }
    throw new Error('Invalid language');
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize, profession = 'Manager') {
    super(firstName, lastName, profession, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize() {
    this.teamSize++;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = [], profession = 'Designer') {
    super(firstName, lastName, profession, salary);
    this.designTools = designTools;
  }
  addDesignTool(tool) {
    if (typeof tool === 'string' && tool.length > 0) {
      this.designTools.push(tool);
      return true;
    }
    throw new Error('Invalid Employee');
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
    if (!(employee instanceof Employee)) {
      throw new Error('Invalid Employee');
    }
    const exists = this.#employees.some(
      (el) => el.firstName === employee.firstName && el.lastName === employee.lastName,
    );
    if (exists) {
      throw new Error(`Employee with name ${employee.firstName} ${employee.lastName} already exists`);
    }
    this.#employees.push(employee);
    return true;
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

  getEmployeesByProfession(profession) {
    if (typeof profession !== 'string' || profession.trim().length === 0) throw new Error('Invalid profession');
    return this.#employees.filter((employee) => employee.profession === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
