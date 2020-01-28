const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando =argv._[0];
//console.log(argv);
//console.log(argv._[0]);
switch (comando) {
case 'crear':

let tarea = porHacer.crear(argv.descripcion);
//console.log('tarea',tarea);
break;
case 'listar':
let listado = porHacer.getListado();

for (let tarea of listado) {
    console.log('============ Por Hacer ==============='.green);
   console.log(tarea.descripcion);
   console.log('Estado:',tarea.completado);
   console.log('==========================='.green);
}

//console.log('Mostrar todas las tareas por hacer');
break;
case 'actualizar':
let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
console.log(actualizado);
break;

case 'eliminar':
    
let borrado = porHacer.eliminar(argv.descripcion);
console.log(borrado);
//console.log(eliminado);
break;

default:
 console.log('Comando no encontrado');
}
