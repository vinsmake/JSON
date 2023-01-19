let empleadosJSON = "empleados.json";

function obtenerEmpleados() {
    fetch(empleadosJSON) /* fetch API takes the archive */
    /* What do the fetch need to do with that archieve? */
    .then( respuestaDeArchivo => respuestaDeArchivo.json()) /* this is going to no with that json archieve, return the archive as a JSON archive, it could be sayed that this is an encripter or archieve transform, like dcx to pdf or png to webp */
    .then( archivoDecencriptado => { /* then, with that json archive, show the data of it */
    let {empleados} = archivoDecencriptado; /* To acces to the empleados' array */
    empleados.forEach(empleado => {
        document.write(`
        <p> ID: ${empleado.id} <br>
        Name: ${empleado.nombre} <br>
        Position: ${empleado.puesto}
        </p>`)
    } 
    ); /* forEach */
})};

obtenerEmpleados();