export default class Alumno {
    constructor(alumno) {
        this._numCuenta = alumno.numCuenta;
        this._nombre = alumno.nombre;
    }

    get numCuenta() {
        return this._numCuenta;
    }

    get nombre() {
        return this._nombre;
    }

    
}