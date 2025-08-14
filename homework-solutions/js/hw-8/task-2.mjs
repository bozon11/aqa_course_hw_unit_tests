/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  const vowels = 'aeiouyAEIOUY';
  if (!wordsArr.length) {
    return [];
  }

  return wordsArr.toSorted(
    (a, b) => [...a].filter((l) => vowels.includes(l)).length - [...b].filter((l) => vowels.includes(l)).length,
  );
}

console.log(sortedByVowels(words));

export { sortedByVowels };
