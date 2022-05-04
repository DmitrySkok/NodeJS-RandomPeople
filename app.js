const fs = require('fs');

const gender = ['M', 'F']
const maleNames = [
  'Liam', 
  'Noah', 
  'Oliver', 
  'Elijah', 
  'William', 
  'James', 
  'Benjamin', 
  'Lucas', 
  'Henry', 
  'Alexander', 
  'Mason', 
  'Michael', 
  'Ethan', 
  'Daniel', 
  'Jacob'
];
const femaleNames = [
  'Olivia', 
  'Emma', 
  'Ava', 
  'Charlotte', 
  'Sophia', 
  'Amelia', 
  'Isabella', 
  'Mia', 
  'Evelyn', 
  'Harper', 
  'Camilla', 
  'Dianna', 
  'Abigail', 
  'LunaElla'
];
const lastNames = [
  'Johnson', 
  'Williams', 
  'Brown', 
  'Jones', 
  'Garcia', 
  'Miller', 
  'Davis', 
  'Rodriguez', 
  'Martinez', 
  'Hernandez', 
  'Lopez', 
  'Gonzalez', 
  'Wilson', 
  'Anderson', 
  'Thomas'
];
let people = [];

function randomChoice(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}
console.clear();

for (let i = 0; i < 21; i++) {
  const obj = {};
  obj.gender = randomChoice(gender);
  switch (obj.gender) {
    case 'M':
      obj.maleName = randomChoice(maleNames);
      // console.log(`it's ${obj.gender}ail with name = ${obj.maleName} =`)
      break;
    case 'F':
      obj.femaleName = randomChoice(femaleNames);
      // console.log(`it's ${obj.gender}emale with name = ${obj.femaleName} =`)
      break;
    default:
      break;
  }
  obj.lastName = randomChoice(lastNames);
  obj.age = Math.floor(Math.random()*(78 - 18) + 18);
  people.push(obj);
}
fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});