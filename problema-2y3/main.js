import Agenda from "./Agenda.js";
import Movimiento from "./Movimiento.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let depositar = document.querySelector("#depositar").value;
                let retirar = document.querySelector("#retirar").value;
    

                let objMovimiento = {
                    depositar: depositar,
                    retirar: retirar
                }
                let movimiento = new Movimiento(objMovimiento);

                agenda.addMovimiento(movimiento);
            }
    });
    }
}

let m = new Main();