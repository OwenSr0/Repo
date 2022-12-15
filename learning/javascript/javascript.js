// templates literales


// array with objects

var uwuColors = [{color: 'black', price: 30}, {color: 'pink', price: 850}, {color: 'orange', price: 420}, {color: 'blue', price: 58}]

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

// location.reload()

// obtain the width of the windows of html
seccion_del_mapa.getBoundingClientRect().width - 20

// filter
// filtra mediante una condiocion y los encapsula
var filterUwU = uwuColors.filter(function(color){
    return color.price < 300;
    }
)

// map
// filtra las condiciones y encapsula.
var mapUwU = uwuColors.map(function(color){
    return color.price;
    }
)

// find
// Busca un valor especifico
var findUwU = uwuColors.find(function(color){
    return color.price === 30;
    }
)

//forEach
// Intervalo por cada elemento del array
uwuColors.forEach((color) => {
    return console.log(color.color)
    }
)

// some
// valida alguna condicion y retorna un boolean
var filterUwU = uwuColors.some(function(color){
    return color.price > 300;
    }
)