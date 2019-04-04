import Agenda from "./Agenda.js";
import Alumno from "./Alumno.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let numCuenta = document.querySelector("#numCuenta").value;
                let nombre = document.querySelector("#nombre").value;

                let objAlumno = {
                    numCuenta: numCuenta,
                    nombre: nombre
                }
                
                   let alumno = new Alumno(objAlumno);
                   agenda.addAlumno(alumno);
                   


            }

        }); 
        document.querySelector("#btnAdd2").addEventListener("click", () => {
            let numCuenta = document.querySelector("#numCuenta").value;
            let nombre = document.querySelector("#nombre").value;

            let objAlumno = {
                numCuenta: numCuenta,
                nombre: nombre
            }
            
               let alumno = new Alumno(objAlumno);
            agenda.addAsistencia(alumno);
        });
    }
}

let m = new Main();
