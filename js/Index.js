/*
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150: 
*/

import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Empleado from "./Cl_Empleado.js";

const salida = document.getElementById("salida");

let empresa = new Cl_Empresa();

let empleado1 = new Cl_Empleado("Juan", "Obrero", 100);
let empleado2 = new Cl_Empleado("Ana", "Obrero", 120);
let empleado3 = new Cl_Empleado("Lin", "Administrativo", 200);
let empleado4 = new Cl_Empleado("Mary", "Obrero", 50);
let empleado5 = new Cl_Empleado("Carlos", "Administrativo", 150);

empresa.procesarEmpleados(empleado1);
empresa.procesarEmpleados(empleado2);
empresa.procesarEmpleados(empleado3);
empresa.procesarEmpleados(empleado4);
empresa.procesarEmpleados(empleado5);  

salida.innerHTML = `
    ${empleado1.nombre} tiene un aumento $${empleado1.aumento()}.<br>
    ${empleado2.nombre} tiene un aumento $${empleado2.aumento()}.<br>
    ${empleado3.nombre} tiene un aumento $${empleado3.aumento()}.<br>
    ${empleado4.nombre} tiene un aumento $${empleado4.aumento()}.<br>
    ${empleado5.nombre} tiene un aumento $${empleado5.aumento()}.<br>
    <br>
    El total de monto adicional que debe pagar la empresa es de $${empresa.devolverAcumMontAumento()}.
    `;