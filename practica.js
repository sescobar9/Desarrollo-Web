const UNIVERSIDADES =
    [
        { "nit": "890.980.040-8", "nombre": "Universidad de Antioquia", "dirección": "Calle 67 Nº 53 - 108", "telefono": "01 8000 416384", },
        { "nit": "899999063-3", "nombre": "Universidad Nacional de Colombia Sede Medellín", "dirección": "Carrera 65 Nro. 59A ", "telefono": "(4) 2638282", },
        { "nit": "890.901.389-5", "nombre": "Universidad EAFIT", "dirección": "Carrera 49, Cl. 7 Sur #50", "telefono": "(4) 2619500", },
        { "nit": "0900450297-5", "nombre": "Universidad de Medellín", "dirección": "Cra. 87 #30-65", "telefono": "(4) 5904500", },
        { "nit": "890.902.922-6", "nombre": "Universidad Pontificia Bolivariana", "dirección": "Cq. 1 #70-01", "telefono": "(4) 4488388", },

    ]

const ESTUDIANTES =
    [
        { "nombre": "Carlos Ángel", "apellidos": "González Giraldo", "id": 1020497009, "Edad": 17, "semestre": 6, "PrecioSemestre": 7000000, "NitUniversidad": "890.980.040-8" },
        { "nombre": "Diego", "apellidos": "Álvarez Atamiranda", "id": 1039102082, "Edad": 15, "semestre": 6, "PrecioSemestre": 5000000, "NitUniversidad": "899999063-3" },
        { "nombre": "Juan Pablo", "apellidos": "Moscoso Mesa", "id": 1037659569, "Edad": 16, "semestre": 6, "PrecioSemestre": 4000000, "NitUniversidad": "890.901.389-5" },
        { "nombre": "Sebastián Jair", "apellidos": "Murillo Viafara", "id": 1000018690, "Edad": 16, "semestre": 6, "PrecioSemestre": 6000000, "NitUniversidad": "0900450297-5" },
        { "nombre": "Jean Marco", "apellidos": "Pedraza Zapata", "id": 1001687235, "Edad": 17, "semestre": 6, "PrecioSemestre": 4900000, "NitUniversidad": "890.902.922-6" },
        { "nombre": "Santiago", "apellidos": "Escobar Escobar", "id": 1193413639, "Edad": 15, "semestre": 6, "PrecioSemestre": 5600000, "NitUniversidad": "890.980.040-8" },
        { "nombre": "Mateo", "apellidos": "Martínez Marulanda", "id": 1000874985, "Edad": 16, "semestre": 6, "PrecioSemestre": 6700000, "NitUniversidad": "899999063-3" },
        { "nombre": "Mateo", "apellidos": "Rivera Arias", "id": 1000903050, "Edad": 17, "semestre": 6, "PrecioSemestre": 5000000, "NitUniversidad": "890.901.389-5" },
        { "nombre": "Michael Stev", "apellidos": "Cardenas Quintero", "id": 1040260872, "Edad": 16, "semestre": 6, "PrecioSemestre": 4600000, "NitUniversidad": "0900450297-5" },
        { "nombre": "Alexis", "apellidos": "Patiño Agudelo", "id": 1000206832, "Edad": 15, "semestre": 6, "PrecioSemestre": 6800000, "NitUniversidad": "890.902.922-6" },
        { "nombre": "Alexander", "apellidos": "Restrepo Múnera", "id": 1000918870, "Edad": 17, "semestre": 6, "PrecioSemestre": 4000000, "NitUniversidad": "890.980.040-8" },
        { "nombre": "Santiago", "apellidos": "Posada Bernal", "id": 1010027176, "Edad": 20, "semestre": 6, "PrecioSemestre": 3800000, "NitUniversidad": "899999063-3" },
        { "nombre": "Kevin Eduardo", "apellidos": "Valencia Rivas", "id": 1077454424, "Edad": 40, "semestre": 6, "PrecioSemestre": 4200000, "NitUniversidad": "0900450297-5" },
        { "nombre": "Santiago", "apellidos": "Urrego Morales", "id": 1036955282, "Edad": 30, "semestre": 10, "PrecioSemestre": 4300000, "NitUniversidad": "899999063-3" },
    ]
    
    // 5. Realizar un algoritmos que imprima los estudiantes menores de edad de cada universidad.
    const BuscarMenor = (callback) =>{
        //con el for recorremos las universidades y los estudiantes
        //luego el segundo for tiene la condicion de que si la edad del estudiantes es menor que 18
        //el nit de la universidad del estudiantes sea igual al nit de la universidad que estamos recorriendo
        //el callback llama a la funcion de ImprimirEstudiante
        for (let index = 0; index < UNIVERSIDADES.length; index++) {
            const universidades = UNIVERSIDADES[index];
            console.log("Los menores de la universidad de " + universidades.nombre)

            for (let index = 0; index < ESTUDIANTES.length; index++) {
                const estudiantes = ESTUDIANTES[index];
                if(estudiantes.Edad < 18 && estudiantes.NitUniversidad == universidades.nit){
                    callback(estudiantes)
                }
            }
        }
    }
    const ImprimirEstudiante = (estudiantes) => {
        console.log(estudiantes.nombre, estudiantes.apellidos)
    }                

    console.log("5.Realizar un algoritmos que imprima los estudiantes menores de edad de cada universidad." + "\n")
    BuscarMenor(ImprimirEstudiante)
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

   //4.Realizar un algoritmo que imprima el nombre de todas las universidades junto con el promedio del valor del semestre pagado de los estudiantes de la universidad.

    const PromedioUniversidad = () => {

        //Creamos 3 variables
        //el acum guardamos el precio del semestre de la universidad acumulado por lo estudiantes de cada universidad
        //en el cont contamos el numero de estudiantes que pertenecen a la universidad
        //el promedio guardamos la division entre la cantidad de estudiantes
        //en el for recorremos la universidades y los estudiantes
        //en el if verificamos que el estudiante se encuentre en dicha universidad

        let acum=0
        let prom=0
        let cont=0

        for (let index = 0; index < UNIVERSIDADES.length; index++) {
            const universidades = UNIVERSIDADES[index];
            for (let index = 0; index < ESTUDIANTES.length; index++) {
                const estudiantes = ESTUDIANTES[index];
                if(estudiantes.NitUniversidad==universidades.nit){
                    acum += estudiantes.PrecioSemestre
                    cont ++
                }
            }
            prom = acum/cont
            acum = 0
            cont = 0
            console.log("el promedio de la universidad " + universidades.nombre + " es " + prom)
            
        }
    }
    console.log("4.Realizar un algoritmo que imprima el nombre de todas las universidades junto con el promedio del valor del semestre pagado de los estudiantes de la universidad."+ "\n")
    PromedioUniversidad()
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //3.Realizar un algoritmo que permita imprimir la identificación, nombre y apellidos de los 5 estudiantes que tienen el mayor valor del semestre pagado.
    const MayorValorSemestre = ( ) => {

        //ahora los acumuladores los usamos para imprimir el  nombre, el id y los apellidos de los estudiantes
        //Las variables mayores las usamos para comparar y guardar los precios de los semestres de mayor a menor
        //en el for recorremos a los estudiantes 
        //en el if verificamos que los estudiantes cumplan con las condiciones de comparacion

        let acum1 = 0
        let acum2 = 0
        let acum3 = 0
        let acum4 = 0
        let acum5 = 0
        let mayor1 = 0
        let mayor2 = 0
        let mayor3 = 0
        let mayor4 = 0
        let mayor5 = 0
        
        for (let index = 0; index < ESTUDIANTES.length; index++) {
            const estudiantes = ESTUDIANTES[index];
            if(estudiantes.PrecioSemestre > mayor1){
                mayor1 = estudiantes.PrecioSemestre
                acum1 = " id: " + estudiantes.id + ", nombre: " + estudiantes.nombre + ", apellidos: " + estudiantes.apellidos + "\n"
            }
            else if(estudiantes.PrecioSemestre < mayor1 && estudiantes.PrecioSemestre > mayor2){
                mayor2 = estudiantes.PrecioSemestre
                acum2 = " id: " + estudiantes.id + ", nombre: " + estudiantes.nombre + ", apellidos: " + estudiantes.apellidos + "\n"
            }
            else if(estudiantes.PrecioSemestre < mayor1 && estudiantes.PrecioSemestre < mayor2 && estudiantes.PrecioSemestre > mayor3){
                mayor3 = estudiantes.PrecioSemestre
                acum3 = " id: " + estudiantes.id + ", nombre: " + estudiantes.nombre + ", apellidos: " + estudiantes.apellidos + "\n"
            }
            else if(estudiantes.PrecioSemestre < mayor1 && estudiantes.PrecioSemestre < mayor2 && estudiantes.PrecioSemestre < mayor3 && estudiantes.PrecioSemestre > mayor4){
                mayor4 = estudiantes.PrecioSemestre
                acum4 = " id: " + estudiantes.id + ", nombre: " + estudiantes.nombre + ", apellidos: " + estudiantes.apellidos + "\n"
            }
            else if(estudiantes.PrecioSemestre < mayor1 && estudiantes.PrecioSemestre < mayor2 && estudiantes.PrecioSemestre < mayor3 && estudiantes.PrecioSemestre < mayor4 && estudiantes.PrecioSemestre > mayor5){
                mayor5 = estudiantes.PrecioSemestre
                acum5 = " id: " + estudiantes.id + ", nombre: " + estudiantes.nombre + ", apellidos: " + estudiantes.apellidos + "\n"
            }

        }
        console.log(acum1, acum2, acum3, acum4, acum5)
    }
    console.log("3.Realizar un algoritmo que permita imprimir la identificación, nombre y apellidos de los 5 estudiantes que tienen el mayor valor del semestre pagado."+"\n")
    MayorValorSemestre()
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

