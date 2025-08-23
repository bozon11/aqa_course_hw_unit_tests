/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

//Add new object into array

function addCharacter(character) {
  if (!character || !character.name || !character.age) {
    throw new Error('invalid input!');
  }
  return characters.push(character);
}

//Get object by its name

function getCharacter(name) {
  return characters.find((el) => el.name === name);
}

//Output array of objects with age >= minAge

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('invalid input!');
  }
  return characters.filter((el) => el.age >= minAge);
}

//Reuse method getCharacter() and update data by name

function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  if (!character || !character.name || !character.age) {
    throw new Error('invalid input!');
  }
  character.name = newCharacter.name;
  character.age = newCharacter.age;
  return characters;
}
// Remove character by his name using findIndex and splice()

function removeCharacter(name) {
  const index = characters.findIndex((obj) => obj.name === name);
  if (index === -1) {
    throw new Error('The character is not found!');
  }
  return characters.splice(index, 1);
}
console.log(removeCharacter('Fred'));

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
