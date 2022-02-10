///////////////////Destructuring//////////////////////////////////////
//Es un codigo que te ayuda a extraer valores de un objeto.
const clientes = {
    nombre : 'Alejandra',
    tipo : 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Jalisco',
            pais: 'Mexico'
        },
        cuenta: {
            desde: '10-12-2012',
            saldo: 4000
        }
    },
    movimientos: ['2015', '2016', '2017', '2018']
}

let nm = clientes.nombre , //Forma anterior complicado si tengo varios atributos dentro del objeto
    tp = clientes.tipo;

let {nombre} = clientes; //Con Destructuring solo busca un objeto o un arreglo

console.log(nombre);

//Acceder a un objeto
let {datos: {ubicacion: {ciudad}} } = clientes;
let {nombre, tipo, datos: {ubicacion: {ciudad, pais}, cuenta: {desde, saldo}}, movimientos: [ , , , fecha4]} = clientes;
console.log(ciudad);

let {datos: {cuenta} } = clientes;
console.log(cuenta.saldo);

//Para inicializar  un valor
let {apellido = 'Marconl'} = clientes;
console.log(apellido);

//Extraer datos de un arreglo
const  ciudades = ['Londres', 'New York', 'Madrir', 'Paris'];

const [ , , , paris] = ciudades;
console.log(paris);

const [londres, nuevaYork, ,] = ciudades;
console.log(londres);
console.log(nuevaYork);

let {movimientos: [ , , , ultimo]} = clientes;

console.log(ultimo);

//Extraer datos de una funcion

function reservacion(completo, opciones, {
                        //Para inicializar un valor
                     fecha = new Date()} = {}
                    ){
    opciones = opciones || {};

    // let metodoPago = opciones.metodoPago,
    //     cantidad = opciones.cantidad,
    //     dias = opciones.dias;

    let {metodoPago, cantidad, dias} = opciones;

    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
    console.log(fecha);
}

reservacion(
    true,
    {
        metodoPago: 'Tarjeta',
        cantidad: 3000,
        dias: 2
    }
);

//////////////Symbol//////////////
//Es  un nuevo tipo de dato primitivo. Cada uno que se genera es unico en la ejecucion de Js.
//Son propiedades privadas.

const simbolo = Symbol();

console.log(simbolo);
console.log(typeof simbolo);

let name = Symbol();
let lastName = Symbol();

let persona = {};
persona[name] = 'Juan'; //Para agrega el symbol a un objeto
persona[lastName] = 'Cammarota';
persona.saldo = 1000; //Forma normal

console.log(persona);
console.log(persona[name]);//Accedo al valor del Symbol con los cochetes.

//////////////////////SET/////////////////////
//Te permite crear una lista de valores, pero NO admite DUPLICADOS.

let carrito = new Set();
carrito.add('Camisa');
carrito.add('Camisa Larga');
carrito.add('Camisa Mujer');
carrito.add('Camisa Hombre');
carrito.add('Camisa Formal');
carrito.add('Camisa'); //Si ve algo duplicado no lo va a añadir

console.log(carrito);
console.log(carrito.has('Camisa'));//Conprueba si el elemento existe

let numeros = new Set([1,2,2,2,3,4,5,5,5,6,7,8,9]);
numeros.delete(9);//borrar el elemento
//numeros.clear();//borrar todo
console.log(numeros);
console.log(numeros.size);

carrito.forEach((producto, index) => {
    console.log(`Index: ${index}, producto: ${producto}`);//En un Set la llave y el valor son iguales
});

//Convertir set a arreglo
const arregloCarrito = [...carrito];
console.log(arregloCarrito);

//////////////////////////MAP////////////////////////////
//Son listas ordenadas que almacenan el valor como llave y valor (par). Evista duplicados al igual que el SET.

let cliente = new Map([['Rico', 'si']]); //Valor por defecto

cliente.set('nombre', 'Juan');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set('pro', true);

console.log(cliente);

//Acceder a los valores:
console.log(cliente.get('nombre'));//Paso la llave para traerlo
console.log(cliente.has('apellido')); //Si existe el valor


cliente.delete('pro');//Eliminar elemento del map
console.log(cliente.get('pro'));
//cliente.clear(); //Elimina todo

cliente.forEach((c, index)=> {
    console.log(`${index}: ${c}`); //Diferencia con el SET, SI almacena index distinto al valor.
});

///////////////////////Generadores///////////////////////////////
//Es una funcion que va a retornar un iterador, nos permite tener mas control ya que puedo ir viendo que devuelve cada iteracion.

function *crearGenerador() {  //* y yield palabras claves para los generadores.
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();
console.log(iterador.next().value); //Para ir obteniendo los valores de cada iteracion dentro de la funcion.
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);

function *carritoCompras() {
    for (let i = 0; i < carritos.length; i++) {
        yield carritos[i];
    }
}

const carritos = ['Pro1', 'Pro2', 'Pro3', 'Pro4'];
let iterator = carritoCompras();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

/////////////////Expresiones Regulares//////////////////
//Es una secuencia de caracteres que conforma un patrón de búsqueda.

let valor, expReg;

expReg = /[0123456789]/;
valor = '1992';
console.log(expReg.test(valor)); //Probar si es una exp reg

//Una fecha 20-10-2018 d = A NUMEROS
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018'
console.log(expReg.test(valor));

expReg = /[1-9]/;
valor = '4565454132'
console.log(expReg.test(valor));

//Letras o numeros con w
expReg = /\w+/;
valor = 'Mensaje de prueba 23231'
console.log(expReg.test(valor));



