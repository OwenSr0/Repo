// Configurar las variables de entorno en Node.js

//El objeto process nos da información sobre el proceso que está ejecutando este script.
//La propiedad env es la que nos da acceso a las variables de entorno de manera sencilla.

// let namee = process.env.NAME || "no name";

// console.log('Hello '+ namee); 
// console.log('Goodbye '+ namee);

//NOMBRE=Juan node first.js - Bash
//POwershell $env:NOMBRE="Carlos"

//nodemon
//pm2

// Callbacks

// La utilizacion de una funcion con variables y un callback es una forma de usar la sincronia dentro del entorno nodejs
// Se utiliza de forma que al ejecutar la funcion, como parametro callback se ejecute una funcion al ser llamada dentro de la funcion.

function Hello(name, callback){
    setTimeout(function() {
        console.log('Hello, ' + name);
        callback(name);
    },1000);
}

function Goodbye(name, callback){
    setTimeout(function() {
        console.log('Goodbye, ' + name);
        callback();
    },1000);
}

// console.log('Starting process...')
// Hello('Owen', function(name){
//     Goodbye(name, function(){
//         console.log('The process was finished');
//     });
// });

//setInterval ejecutar una funcion cada cierto tiempo
//setTimeout Ejecutar solo una vez esta funcion

//Callback Refactorizada

//Es muy importante el uso de los callbacks pero tambien es importante tener en cuenta el uso de funciones, detras de de otra funcion, es importante dividir el problema y 
//Declarar funciones para evitar redundancia en nuestro codigo

function Conversation(name, times, callback) {
    if(times > 0){
        console.log('Bla Bla Bla..')
        --times
        Conversation(name, times, callback);
    } 
    else{
        Goodbye(name, callback)
    }
}

// console.log('Starting process...')
// Hello('Owen', function(name){
//     Conversation(name, 3, function(name){
//         console.log('The process was finished');
//     });
// });

//Promise

// return new promise, es un tipo de funcion para node js que nos ayuda a capturar funciones que funciones y las cuales no lo hacen. Con los respectivos resolve y reject.
//

function Hello_P(name){
    return new Promise (function (resolve, reject){
        setTimeout(function() {
            console.log('Hello, ' + name);
            resolve(name);
        },1000);
        // Se utiliza en una zona la cual llegue el programa al fallar.
        // Reject('Hay un error?)
    });
}

function Conversation_P(name) {
    return new Promise ((resolve, reject) => {
            console.log('Bla Bla Bla..');
            resolve(name);
    });
}

function Goodbye_P(name){
    return new Promise (function (resolve, reject){
        setTimeout(function() {
            console.log('Goodbye, ' + name);
            resolve();
        },1000);
    });
}

//Importante destacar a la hora de ejecutar las funciones, las variables declaradas por un anterior funcion, sirven, pero si es que ya paso una mas, ademas
//de la funcion declarada, se pierden las variables. Tener encuenta el retorno de variables.

console.log('The process was started');
Hello_P('Owen')
// .then es la forma en la que se ejecutan otras funciones ligadas a la primera para sincronizarlas
    .then(Conversation_P)
    .then(Conversation_P)
    .then(name => {
        return Goodbye_P(name);
    })
    .then(() => {
        console.log('The process was finished');
    })
    .catch(error => {
        console.log('Theres an error');
        console.log(error);
    })

