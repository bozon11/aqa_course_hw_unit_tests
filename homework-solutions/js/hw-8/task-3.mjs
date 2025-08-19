/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const newArr = [...new Set(numbers)].toSorted((a, b) => a - b);

  if (!numbers.length) return [];
  if (newArr[0] > 1) return 1;

  const foundElement = newArr.find((el, i) => i > 0 && el - newArr[i - 1] > 1);
  return foundElement ? foundElement - 1 : newArr[newArr.length - 1] + 1;
}

const arr = [5, 2, 7, 3, 8, 1, 6];
console.log(findMissingNumber(arr));

export { findMissingNumber };
