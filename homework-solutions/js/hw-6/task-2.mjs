/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const myPizzas = [myPizzasT1, myPizzasT2];

const caseCheckCompetitorPizzas = [];
for (const pizza of competitorPizzas) {
  caseCheckCompetitorPizzas.push(pizza[0].toUpperCase() + pizza.slice(1).toLowerCase());
}
let resultUnique = [];
let resultNull;

for (const variant of myPizzas) {
  let newUnique = [];

  const caseCheckMyPizzas = [];
  for (const pizza of variant) {
    caseCheckMyPizzas.push(pizza[0].toUpperCase() + pizza.slice(1).toLowerCase());
  }

  for (const pizza of caseCheckMyPizzas) {
    if (!caseCheckCompetitorPizzas.includes(pizza) && !newUnique.includes(pizza)) {
      newUnique.push(pizza);
    }
  }

  if (!newUnique.length) {
    resultNull = null;
  } else {
    resultNull = undefined;
    resultUnique = [...resultUnique, ...newUnique];
  }
}
console.log(resultUnique);
console.log(resultNull);

export { resultNull, resultUnique };
