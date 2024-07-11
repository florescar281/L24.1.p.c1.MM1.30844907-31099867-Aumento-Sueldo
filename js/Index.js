/*
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (obrero) actualmente gana $100, Ana (obrero) gana
$120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos (administrativo)
gana $150: 
*/

import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Empleado from "./Cl_Empleado.js";

let empresa = new Cl_Empresa();

let empleado1 = new Cl_Empleado("Juan", "Obrero", 100);
let empleado2 = new Cl_Empleado("Ana", "Obrero", 120);
let empleado3 = new Cl_Empleado("Lin", "Administrativo", 200);
let empleado4 = new Cl_Empleado("Mary", "Obrero", 50);
let empleado5 = new Cl_Empleado("Carlos", "Administrativo", 150);