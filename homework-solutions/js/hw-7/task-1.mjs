/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  let sum = [];
  for (const item of arr) {
    sum = sum.concat(item);
  }
  return sum;
}
let result = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(result);
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  let separatedSentence = sentence.trim().split(/\s+/);
  let newSentence = [];

  for (const word of separatedSentence) {
    if (word !== separatedSentence.at(0)) {
      newSentence.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    } else {
      newSentence.push(word.toLowerCase());
    }
  }
  return newSentence.join('_');
}
let a = devideBy('I    am    an     engineer');
console.log(a);
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(2));

export { mergeArrays, fibonacci, devideBy };
