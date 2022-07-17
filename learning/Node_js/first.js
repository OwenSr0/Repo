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

// console.log('The process was started');
// Hello_P('Owen')
// // .then es la forma en la que se ejecutan otras funciones ligadas a la primera para sincronizarlas
//     .then(Conversation_P)
//     .then(Conversation_P)
//     .then(name => {
//         return Goodbye_P(name);
//     })
//     .then(() => {
//         console.log('The process was finished');
//     })
//     // .catch sirve para encontrar los errores reconocidos por reject.
//     .catch(error => {
//         console.log('Theres an error');
//         console.log(error);
//     })

// Async/await

// Asyng y await utilizados para evitar el uso de funciones dentro de funciones para evitar mucho texto

function Hello_A(name){
    return new Promise (function (resolve, reject){
        setTimeout(function() {
            console.log('Hello, ' + name);
            resolve(name);
        },1000);
    });
}

function Conversation_A() {
    return new Promise ((resolve, reject) => {
            console.log('Bla Bla Bla..');
            resolve();
    });
}

function Goodbye_A(name){
    return new Promise (function (resolve, reject){
        setTimeout(function() {
            console.log('Goodbye, ' + name);
            resolve();
        },1000);
    });
}

//Asyng es la palabra que utlizamos antes de una funcion para denotar que utilizaremos await
//Await es la palabra que utilizamos antes de nombrar una funcion para que se vuelva sincronas y se ejecunten una tras otra

async function main(){
    let name = await Hello_A('Owen');
    for(let i = 0; i < 3 ; i++){
        await Conversation_A();
    }
    await Goodbye_A(name);
}

//main();


// Globals

// Los modulos globales son funciones ya definidas como funciones globales que vienen dentro de nodejs

// Se encarga de ejecutar despues de cierto tiempo
setTimeout((varr) => {
    //...
});

// Ejecuta cada cierto intervalo de tiempo
setInterval((varr) => {
    //...
});

// Se encarga de ejecutar inmediatamente
setImmediate((varr) => {
    //..
});

// Corta a setTimeOut
clearTimeout((varr) => {
    //...
});

// Corta un setInterval
clearInterval((varr) => {
    //...
})


// modulos globales de node js https://nodejs.org/api/globals.html


// File system

//

const fs = require('fs');

function read(route, cb){
    fs.readFile(route, (err, data) => {
        console.log(data.toString());
    });
}

function write(route, content, cb) {
    fs.writeFile(route, content, function(err) {
        if(err) {
            console.err('Error, Check the code ', err);
        } else{
            console.log('It write correct');
        }
        return route;
    })
}

function deletee(route, cb) {
    fs.unlink(route, cb);
    console.log('it was delete')
}

async function writeReadDelete(route, content, cb){
await write(route, content);
await read(route);
setTimeout(((route, cb),() => {
    deletee(route, cb);
    console.log('XD')
}), 10000) ;
}

//writeReadDelete(__dirname + '/archivee.txt', 'New archive', console.log)
//write(__dirname + '/archivee.txt', 'New archive', console.log)
//read(__dirname + '/text.text')
//deletee(__dirname + '/archivee.txt', console.log)

