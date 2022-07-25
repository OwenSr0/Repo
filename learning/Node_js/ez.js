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

// // Ejecuta cada cierto intervalo de tiempo
// setInterval((varr) => {
//     //...
// });

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

// console.clear();


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


// Procesos hijo

// Procesos hijo que se utilizan bajo el monohilo para ejecutar procesos en segundo plano, dependiendo lo que se requiera

const { exec } = require('child_process');
// nombra una constante con proceso hijo
const { spawn } = require('node:child_process');

// linux exec('ls -la')
// exec('node folder/file.js, --) comando
// exec('dir', (err, stdout, sterr) => {
//     if (err) {
//         console.error(err);
//         return false;
//     }
//     console.log(stdout);
// })

// let processs = spawn('dir');
// console.log(process.pid);

// processs.stdout.on('data', function (data){
//     console.log(data.toString())
// })

// processs.on('exit', function(){
//     console.log('The process finish')
//     console.log(process.killed)
// })

// Modulos nativos C++

// Como agregar modulos c++ addons

// const myAddon = require('addon')
const myAddon = require('./build/Release/addon')
// Aqui requerimos el addon que creamos con gyp, para que ejecutara c++ implementado
// console.log(myAddon);
// needs Python, node-gyp

// Http

// Como requerir http en node y crear servidores e llegar a especificos

const http = require('http');

// function router(req, res) {
//     console.log('New request')
//     console.log(req.url);

//     switch (req.url){
//         case '/hello':
//             res.write('Hello, how are you?');
//             res.end();
//             break;
//         default:
//             res.write('Error 404: Dont found');
//             res.end();
//     }

//     res.writeHead(201, { 'Content-Type': 'text/plain' });

//     res.write('Response');

//     res.end(); 
// }

// // Solicitud http
// http.createServer(router).listen(3000);

// console.log('Listening http in the port 3000');

// OS

// OS fundamental cuando se quiere saber sobre cosas del sistema ya sea para usarlo como condiciones o para saber como ejecutarse.

const os = require('os');
const { clear } = require('console');

const SIZE = 1024;
function kb(bytes){return bytes / SIZE}
function mb(bytes){return kb(bytes) / SIZE}
function gb(bytes){return mb(bytes) / SIZE}

// console.log(os.cpus());
// console.log(os.freemem());
// console.log(kb(os.freemem));
// console.log(mb(os.freemem));
// console.log(gb(os.freemem));
// console.log(os.tmpdir());
// console.log(os.hostname());


// Process

// process es importante para utilizar dentro de nuestro app y canalizar ciertos puntos y ejecutar algo ahi.

// process.on('beforeExit', () => {
//     console.log('The process was finishing'); 
// })
// // Importante destacar que los eventos en exit, solo pueden ser sincronos y que se ejecutaran como ultimo
// process.on('exit', () => {
//     console.log('The process finish');
// })

// process.on('uncaughtException', (err, origin) => {
//     console.error('unexpected error')
//     console.error(err.message)
// })
// console.log(e)

// Gestion de paquete NPM/package.json

// Basico en el mundo de node js los paquetes/modulos que agregamos.

// npm init
// npm install
// Como requerir un package externo.
const isOdd = require('is-odd');

// console.log(isOdd(2))

// Contruyendo modulos: Require e Import

// Como utilizar require and import, para solicitar modulos creados por nososotros o npms

const modulee = require('./module.js');


// modulee();

// console.log(modulee.prop1);
// modulee.greetings();

// mjs en la carpeta mjs


//  Modulos utiles

// Estos modulos son buenos para encriptar, la "hora" y sharp que nos permine modificar archivos.

// Bycript
const bcrypt = require('bcrypt');

const password = '1234Security';

// bcrypt.hash(password, 5, function(err, hash) {
//     console.log(hash)

//     bcrypt.compare(password, hash, function(err, res) {
//         console.log(res)
//     })
// })

// Moment
const moment = require('moment');

let ahora = moment();

// console.log(ahora.toString());
// console.log(ahora.format('YYYY/MM/DD - HH:mm'));

// Sharp

const sharp = require('sharp')

// sharp('original.png')
//     .resize(80)
//     .grayscale()
//     .toFile('resized.png')


//  Buffers

// Como realizar un buffer, como alogar cierta cantidad de de unidades de memoria y como modificar esas unidades.

// let buffer = Buffer.from([1, 2, 3]);
let buffer = Buffer.from('Hello')

// console.log(buffer);

let abc = Buffer.alloc(26);
// console.log(abc);

for(let i = 0; i < 26 ; i++){
    abc[i] = i + 97;
}

// console.log(abc.toString())

//  Streams

//  Se utiliza para captar la informacion recibida en partes "Principalmente usada para
//  grandes cantidades". Y modificarla dependiendo del uso

//fs ya marcado antes con require
const stream = require('stream');
const util = require('util');
const { AsyncResource } = require('async_hooks');
const { Z_ASCII } = require('zlib');
//  básicamente lo que hace es transformar la secuencia de entrada para que la secuencia de salida sea una diferente
const Transform = stream.Transform;

let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt')
// readableStream.setEncoding('utf8')


// readableStream.on('data', function (chunk) {
//     data += chunk;
// })

// readableStream.on('end', function(){
//     console.log(data);
// })

// process.stdout.write('abc')

// esta función será donde ejecutaras la transformación. al colocar Tranform.call(this) estas iniciando el llamado
//  a la tranformacion de tu secuencia datos. y al colocar this estas diciendo que se hará dentro del método Mayus
// function Mayus(){
//     Transform.call(this);
// }
// // es crear una instancia de la clase Transform y estableciéndolo como prototipo a la función Mayus.
// util.inherits(Mayus, Transform);

// // Se podra ver que cambio o que transformación le harás a la secuencia de datos que estas recibiendo como entrada.
// Mayus.prototype._transform = function(chunk, codif, cb){
//     chunkMayus = chunk.toString().toUpperCase()
//     this.push(chunkMayus);
//     cb();
// }

// La version nueva utilizando constructor.

// class Mayus extends Transform {
//       constructor() {
//             super();
//             Transform.call(this);
//       }
//       _transform = (chunk, codif, cb) => {
//             let chunkMayus = chunk.toString().toUpperCase();
//             this.push(chunkMayus);
//             cb();
//       };
// }


// // creas una instancia de la funcion Mayus
// let mayus = new Mayus();

// // es limitar el almacenamiento en el buffer para que no haya una sobresaturacion a la hora se pasar la secuencia de los datos
// readableStream
//     .pipe(mayus)
//     .pipe(process.stdout)


// Benchmarking Console 

// Es importante gestionar el tiempo que utiliza cada funcion, Para mejorar el performance y los tiempos de carga.
// Console.time, inicia un tiempo x
// console.timeEnd termina el tiempo y lo muestra.
// let suma = 0;

// console.log('the asynco starts')
// console.time('bucle');
// console.time('bucle2');
// console.time('Asynco');
// for(let i = 0; i < 1000000; i++){
//     suma += 1;
// }
// console.timeEnd('bucle');

// let suma2 = 0;
// for(let i = 0; i < 1000000; i++){
//     suma2 += 1;
// }
// console.timeEnd('bucle2');

// function asynco() {
//     return new Promise( (resolve) => {
//         setTimeout((function () {
//             console.log('the process was finished')
//             return resolve();
//         }))
//     })
// }

// asynco()
//     .then(() => {
//         console.timeEnd('Asynco')
//     })

//  Error first callbacks

//  Es importante detectar a los errores a tiempo, es asi que hay maneras de forzar errores para ayudarnos. 

// function Asyncro(callback){
//     setTimeout(function() {
//         try{
//             let a = 3 + Zesz;
//             callback(null, a);
//         }   catch(e){
//             callback(e);
//         }
//     })
// }

// Asyncro(function(err, date) {
// if(err){
//         console.error('we have a error');
//         console.error(err)
//         // throw err; //No funciona en async
//     }
// })


// Scraping

// Es la tecnica de simular la navegacion de un humano para extraer informacion de sitios

const puppeteer = require('puppeteer')
    // Funcion para navegar
async function scraping() {
    console.log('Lanch');
    // puppeter nos ayuda a abrir un navegador en segundo plano
    const browser = await puppeteer.launch({headless: false});
    // Abrir una nueva pagina
    const page = await browser.newPage();
    // Dirigir al navegador a una pagina
    await page.goto('https:es.wikipedia.org/wiki/node.js')
    // Busca el componente especifico y hace lo que se le indique
    var tittle1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML;
    });
    console.log(tittle1)
    console.log('Closing');
    browser.close();
    console.log('closed');
};

// Yargs  

// 






