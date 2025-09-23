// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
  getDetails(): string;
  start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
  protected make: string;
  protected model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  start(): string {
    return `The vehicle ${this.make} ${this.model} is starting.`;
  }
  abstract getDetails(): string;
}

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
  private year: number;

  constructor(make: string, model: string, year: number) {
    super(make, model);
    this.year = year;
  }

  getDetails(): string {
    return `${this.make} ${this.model}, ${this.year}`;
  }
}

// 4. Создайте объект класса Car и проверьте работоспособность
const firstCar = new Car('Toyota', 'Supra', 1995);
console.log('DetailsOfAuto:', firstCar.getDetails());
console.log('Start:', firstCar.start());

const secondCar = new Car('BMW', 'X5', 2022);
console.log('Second vehicle:');
console.log('DetailsOfAuto:', secondCar.getDetails());
console.log('Start:', secondCar.start());
