const fs = require('fs');

let ListadoPorHacer = [];

let guardarDB = () => {
    let data = JSON.stringify(ListadoPorHacer);
    //console.log(`data= ${data}`);
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se pudo grabar');

    });
}

let cargarDB = () => {
    try {
    ListadoPorHacer = require('../db/data.json');
    //console.log(ListadoPorHacer);
}
    catch (error) {
        ListadoPorHacer = [];
    }

};

const crear = (descripcion) => {
   cargarDB();
   let porHacer = {
        descripcion,
        completado: false
        };
    console.log('porhacer',porHacer);
    ListadoPorHacer.push(porHacer);
    guardarDB();
   return porHacer;
 
}

const getListado = () => {
    cargarDB();
    return ListadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion===descripcion);
    if (index >= 0) {
        ListadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }
        else
    {
        return false;
    }
}

const eliminar = (descripcion) => {
    cargarDB();
    let nuevolistado = ListadoPorHacer.filter(tarea => {
        return tarea.descripcion!==descripcion});
    if (ListadoPorHacer.length===nuevolistado.length)
{
        return false;
    }
        else
    {
        ListadoPorHacer=nuevolistado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}
