import {Cliente} from "./cliente";

//Exportar variables
export const nombreEmpresa = 'Udemy'; //Permite exportar necesario agregar en el html el type=module
export let ahorro = 200000000000000;
export const categoria = 'Aprendizaje';

//Exportar Funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categiria ${this.categoria}`;
}

export class Empresa extends Cliente{

    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}