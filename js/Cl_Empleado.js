export default class Cl_Empleado {
    constructor(n, c, s) {
        this.nombre = n;
        this.sueldos = s;
        this.cargo = c;
    }

    set nombre(n) {
        this._nombre = n;
    }

    set sueldos(sueldos) {
        this._sueldos = sueldos;
    }  

    set cargo(c) {
        this._cargo = c;
    }

    get sueldos() { 
        return this._sueldos;
    }

    get nombre() {
        return this._nombre;
    }

    get cargo() {
        return this._cargo; 
    }

    aumento(){
        if(this._cargo == "Administrativo"){
            return this._sueldos * 0.10;
        } else if (this._cargo == "Obrero"){
            return this._sueldos * 0.20;
        } else {
            return this._sueldos * 0;
        }
    }
}