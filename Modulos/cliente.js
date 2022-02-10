//Exportar variables
export const nombreCliente = 'Juan'; //Permite exportar necesario agregar en el html el type=module
export let ahorro = 200;

//Exportar Funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

//Exportar Clases (se exportan variables y metodos)

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}