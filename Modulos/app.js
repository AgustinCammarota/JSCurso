//Para importar cosas de otros modulos imp agregar el type=module en el html
import {ahorro, nombreCliente, mostrarInformacion, Cliente} from "./cliente";
//import * as cliente from "./cliente"; //Para importar todos

//Con as puedo cambiar el nombre de una varaible importar para que no halla conflictos con posibles coincidencias
import {
    nombreEmpresa,
    ahorro as ahorroEmpresa,
    mostrarInformacion as informacionEmpresa,
    Empresa,
    categoria
} from "./empresa";

console.log(nombreCliente);
console.log(ahorro)

console.log(mostrarInformacion(nombreCliente, ahorro));

let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());

console.log(nombreEmpresa);
console.log(ahorroEmpresa);
console.log(informacionEmpresa(nombreEmpresa, ahorroEmpresa));

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);