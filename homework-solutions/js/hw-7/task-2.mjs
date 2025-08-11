/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }

  let normalWord = word.trim().toLowerCase();
  let reverseWord = '';

  for (let i = normalWord.length - 1; i >= 0; i--) {
    reverseWord += normalWord[i];
  }
  return reverseWord === normalWord;
}
isPalindrom('MadAm');
/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  }
  const newSentence = sentence.trim().split(' ');
  if (newSentence[0] === '') {
    return [];
  }

  let longestWord = [];
  let maxLength = 0;

  for (const word of newSentence) {
    if (word.length > maxLength) {
      longestWord = [word];
      maxLength = word.length;
    } else if (word.length === maxLength) {
      longestWord.push(word);
    }
  }
  return longestWord;
}

console.log(findLongestWords('The quick rown fox jumps'));

export { isPalindrom, findLongestWords };
