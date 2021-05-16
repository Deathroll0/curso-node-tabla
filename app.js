const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
console.clear();

// console.log(argv);

// const [,,arg3] = process.argv;
// const [, base] = arg3.split('=');

// const base = 7;

crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));
