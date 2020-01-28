const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'comando para actualizar una tarea'}
const completado = {
    demand: false,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
.command('crear', 'Crear una tarea por hacer',descripcion)
.command('actualizar', 'Actualizar una tarea por hacer',descripcion,completado)
.command('listar', 'Listar las tareas',descripcion)
    .command('eliminar', 'Elimina una tarea',descripcion)
            .help()
            .argv;


module.exports = {argv
}