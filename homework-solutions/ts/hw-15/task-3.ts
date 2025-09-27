// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению.
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

type ObjectKey = string | number | symbol;
function getKeyByValue<T extends Record<ObjectKey, any>>(obj: T, value: T[keyof T]): keyof T | undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

// console.log('getKeyByValue(numbers, 1):', getKeyByValue(numbers, 1));
// console.log('getKeyByValue(numbers, 3):', getKeyByValue(numbers, 3));
// console.log('getKeyByValue(numbers, 10):', getKeyByValue(numbers, 10));
