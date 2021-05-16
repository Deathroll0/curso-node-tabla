const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    }).option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe:'Es por cuanto se multiplica la base'
    }).option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if(isNaN(argv.b) || isNaN(argv.h)){
            throw 'La base y hasta tiene que ser un numero';
        }
        return true;
    })
    .argv;

    module.exports = argv;