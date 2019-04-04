export default class Movimiento {
    constructor(movimiento) {
        this._depositar = movimiento.depositar;
        this._retirar = movimiento.retirar;
    }

    get depositar() {
        return this._depositar;
    }

    get retirar() {
        return this._retirar;
    }

    getSaldo() {
        let saldo = Number(this._depositar) - Number(this._retirar)
        return saldo;
    }
}