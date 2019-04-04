import Movimiento from "./Movimiento.js";

export default class Agenda {
    constructor(tablaAgenda) {
        this._tablaAgenda = tablaAgenda;
        this._movimientos = [];
        
        this._initTables();
    }

    _initTables() {
        let movimientos = JSON.parse(localStorage.getItem("movimientos"));
        if(movimientos === null) {
            return;
        }
        movimientos.forEach((movimiento, index) => {
            this._showInTable(new Movimiento(movimiento));
        });
    }
    _showInTable(movimiento){
        let row = this._tablaAgenda.insertRow(-1);

        let cellDepositar = row.insertCell(0);
        let cellRetirar = row.insertCell(1);
        let cellSaldo = row.insertCell(2);

        cellDepositar.innerHTML = movimiento.depositar;
        cellRetirar.innerHTML = movimiento.retirar;
        cellSaldo.innerHTML = movimiento.getSaldo();


        let objMovimiento = {
            depositar: movimiento.depositar,
            retirar: movimiento.retirar
        }
        this._movimientos.push(objMovimiento);
    }
    addMovimiento(movimiento) {
        this._showInTable(movimiento);
        localStorage.setItem("movimientos", JSON.stringify(this._movimientos));
    }
}