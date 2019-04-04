import Alumno from "./Alumno.js";

export default class Agenda {
    constructor(tablaAgenda) {
        this._tablaAgenda = tablaAgenda;
        this._asistencia = 0;
        this._alumnos = [];
 
        this._initTables();
    }

    _initTables() {
        let alumnos = JSON.parse(localStorage.getItem("alumnos"));
        if(alumnos === null) {
            return;
        }
        alumnos.forEach((alumno, index) => {
            this._showIntable(new Alumno(alumno));
    
        });
    }

        _showIntable(alumno) {
            let row = this._tablaAgenda.insertRow(-1);

            let cellNumCuenta = row.insertCell(0);
            let cellNombre = row.insertCell(1);
            let cellAsistencia = row.insertCell(2);

            cellNumCuenta.innerHTML = alumno.numCuenta;
            cellNombre.innerHTML = alumno.nombre;
            cellAsistencia.innerHTML = this._asistencia;


            let objAlumno = {
                numCuenta: alumno.numCuenta,
                nombre: alumno.nombre,
            }
            this._alumnos.push(objAlumno);
            
        }

        _findAlumno(numCuenta) {
            let foundAt = -1;
            this._alumnos.forEach((alumno, index) =>{
                if(alumno.numCuenta === numCuenta) {
                    foundAt = numCuenta;
                    return;
                }
            });
            return foundAt;
        }
        addAlumno(alumno) {
            let found = this._findAlumno(alumno.numCuenta);
            if(found >= 0) {
                alert('Ya está registrado');
                return;
            }
            else{
                alert('Bienvenido');
            }
            
            this._showIntable(alumno);
            localStorage.setItem("alumnos", JSON.stringify(this._alumnos));

        }

        addAsistencia(alumno) {
            if(alumno.numCuenta === numCuenta) {
                this._asistencia = 1;
                
            }
            else{
                alert('No se encontró');
            }
            this._showIntable(alumno);
            localStorage.setItem("alumnos", JSON.stringify(this._alumnos));
        }
    }
    
