const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, hasta, listar) => {
    try{
        let salida = '';
        salida +='======================\n';
        salida +='     Tabla del ' + base + '\n';
        salida +='======================\n';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
    
        if (listar) console.log(salida.rainbow);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    }catch(err){
        throw err;
    }
    
}

module.exports ={
    crearArchivo
}