export default class Cl_Empresa {
    constructor() {
        this.acumMontAumento = 0;
    }

    procesarEmpleados(e) {
        this.acumMontAumento += e.aumento();
    }

    devolverAcumMontAumento() {
        return this.acumMontAumento;
    }
}