function ejercicio4() {
    let alumnos = [
        { nombre: "Lucia", nota: 7},
        { nombre: "Juan Cruz", nota: 6 },
        { nombre: "Sebastian", nota: 9 }
    ];

    let mejor = alumnos[0];

    for (let alumno of alumnos) {
        if (alumno.nota > mejor.nota) {
            mejor = alumno;
        }
    }

    console.log(mejor.nombre);
}