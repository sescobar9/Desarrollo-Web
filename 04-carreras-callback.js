
const CARRERAS =
    [
        { "estudiantes":50, "nombre": "SISTEMAS", },
        { "estudiantes":40, "nombre": "DERECHO", },
        { "estudiantes":70, "nombre": "COMUNICACION", },
        { "estudiantes":80, "nombre": "CIVIL", },
        { "estudiantes":100, "nombre": "AMBIENTAL", },
        { "estudiantes":60, "nombre": "PSICOLOGIA", },
        { "estudiantes":90, "nombre": "FINANCIERA", },
       
    ]
/**
 * ACTIVIDAD
 * Crear una funcion que capture el nombre de una carrera. Y la funcion debe
 * de buscar en la base de datos el numero de estudiantes e imprimir en consola
 */
const imprimirCarrera=(carrera)=>{
    console.log(carrera.nombre);
    
}
const obtenerCarrera=(estudiantes,callback)=>{
    
    for (let index = 0; index < CARRERAS.length; index++) {
        const carrera = CARRERAS[index];
        if(carrera.estudiantes==CARRERAS.estudiantes){
            imprimirCarrera(carrera.nombre)
        }
        
    }

}

obtenerCarrera(40)
