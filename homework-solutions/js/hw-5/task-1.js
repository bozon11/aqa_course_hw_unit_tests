/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';

for (let i = 10; i >= 0; i--){
    if(i % 2 == 0){
        if(i !== 0){
            evenNumbersResult += i + "-";
        } else {
            evenNumbersResult += i;
        }
    }
}

console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';

for (let i = 0; i < 5; i++){
    let smileLadder = '';
    for (let j=0; j < i +1; j++){
      smileLadder += ':)';
    }
    smilePatternResult += smileLadder;
    if(i!==4){
        smilePatternResult += "\n";
    }
}
console.log(smilePatternResult);


/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';

replaceSpacesWithOneResult = text.replaceAll(" ", 1);
console.log(replaceSpacesWithOneResult);


export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
