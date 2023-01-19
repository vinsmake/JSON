

async function obtenerEmpleados() {
    let empleadosJSON = "empleados.json"; 


    let responseEmpleadosJSON = await fetch(empleadosJSON);
    console.log(responseEmpleadosJSON);
    let restructuredEmpleadosJSON = await responseEmpleadosJSON.json();
    console.log(restructuredEmpleadosJSON);
}; /* obtenerEmpleados */

obtenerEmpleados();