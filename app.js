//Listar del 100 al 0

for (let i = 100; i >= 0; i--) {
  console.log(i);
}

// Listar numeros pares del 0 al 100

for (let i = 0; i <= 100; i+=2) {
    console.log(i);
}

//listar numeros impares del 0 al 100

for (let i = 0; i <= 100; i+=3) {
    console.log(i);
}

//forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2); 
});

//Map

const number = [1, 2, 3, 4, 5];
const doubledNumbers = number.map((number) => number * 2);
console.log(doubledNumber); // [2, 4, 6, 8, 10]

//array methods

const dogs = [
  {
    id: 'dog-1',
    name: 'Poodle',
    temperament: ['Inteligent', 'Active'],
  },
  {
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: ['Loyal', 'Faithful'],
  },
];

// FIND (Devuelve el primer elemento que cumpla la condicion)

const berneseDog = dogs.find((dog) => dog.name === 'Bernese Mountain Dog');

console.log(berneseDog);

// SOME (Devuelve true or false dependiendo la condicion de al menos uno)

const isAggressive = dogs.some((dog) => dog.temperament.includes('Aggresive'));

console.log(isAggressive);

// EVERY (Devuelve true or false solo si todos cumplen)

const isActive = dogs.every((dog) => dog.temperament.includes('Active'));

console.log(isActive);

//FILTER (Filtra el arreglo dependiendo de la condicion)

const faithfulDogs = dogs.filter((dog) => dog.temperament.includes('Faitful'));

console.log(faithfulDogs);
