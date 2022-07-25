// templates literales


// 

const name0= 'Deadpool';
const real= 'Wade Winston';

const normal = name0 + ' ' + real;
const template = `${name0} ${real}`

// console.log(normal);
// console.log(template);

// Destructure of data

//

const superman = {
    name1: 'Clark',
    lastname:'Kent',
    power: 'Man of steel'
}

const { name1, lastname, power} = superman

// console.log(name1, lastname, power)

function printHero({name1, lastname, power}) {
    console.log(name1, lastname, power);
}

// printHero(superman);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1,h2,h3] = heroes;
const [, , h4] = heroes;

// console.log(h1,h2,h3,h4);


// 

// 

const sum = (a, b) => a + b;

console.log(sum(2, 23));