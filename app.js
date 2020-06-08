//let edad = prompt('Cual es tu edad?');prompt, permite enviar mensajes por pantalla
//let año = confirm('Desea eliminar?'); confirm, mensaje de confirmacion.

//console.log("Enviado a la consolas"); console, permite enviar contenido a la consola. 
//ej: table, error, warn ....

//3 formas de generar variables: VAR - LET - CONST
var nombre;
var nombre = 'Juan';//Se puede volver a declarar
var nombre = "Juan";
nombre = 'john';  
console.log(nombre);

var apellido1 = 'Cam', apellido2 = 'Mut';
console.log(apellido1 + apellido2);

let usuario; //No se puede volver a declarar
usuario = 'agustin';
console.log(usuario);

const producto = 'Libro'; //Las constantes siempre deben tener un valor de inicio
//No se puede cambiar su valor. 

console.log(`${nombre} ${apellido2}`);
console.log(nombre.length); //cantidad de caracteres. 
console.log(nombre.concat(' ', 'Es genial')); //Concatenar un strig
console.log(nombre.toUpperCase());// varible en mayus

let mensaje = 'Un dia muy bonito encontre una chica';
console.log(mensaje.indexOf('dia')); //me permite encontrar un caracter en el string 
//Si no lo encuentra devuelve -1 y si lo encuentra devuelve la posicion 

console.log(mensaje.substring(0, 11)); //Para que corte la cadena de texto 
console.log(mensaje.split(' ')); //Permite separar una cadena de texto 
console.log(mensaje.replace('Un', 'Muchos'));// Permite replazar un caracter por otro
console.log(mensaje.includes('muy')); //Si encuentra el valor retorna true sino false


///////////////NUMEROS/////////////////

const numero1 = 30, numero2 = 20, numero3 = 
30.30, numero4 = .20, numero5 = -6;

let resultado; 

resultado = numero1 + numero2;
resultado = numero2 * numero3;
resultado = numero3 % numero4; //Modulo, reciduo de la divicion

resultado = Math.PI;
resultado = Math.round(2.5);//Redondea. Con ceil redondea hacia arriba y floor redondea hacia abajo
resultado = Math.abs(numero5);//Retorna el absoluto.
resultado = Math.pow(8, 3);// Retorna la potencia.
resultado = Math.min(3, 4, 5, 6, 7, 8, 9);
resultado = Math.max(3, 4, 5, 6, 7, 8, 9);
resultado = Math.random(); //Genera un numero random
console.log(resultado);

//Los tipos de datos en js se guardan en el valor no en la variable
let valor;
valor = 'Cadena de texto';
valor = 20;
valor = true;
valor = null;
valor = undefined;
valor = {
    nombre: 'juan',
    apeliddo: 'cammarota'
};
//Symbol-ESC6
valor = Symbol('Simbolo');
valor = [1, 2, 3, 4];
valor = new Date();

console.log(valor);
console.log(typeof valor); //Nos regresa el tipo de dato

//Operadores de comparacion

const num1 = 20;
const num2 = 50;
const num3 = '20';

console.log(num1 > num2);
console.log(num1 < num2);
console.log(20 == 20);// == revisa el valor unicamente === revisa valor y tipo de dato
console.log(2 != 3);
console.log('hola' == ' hola'); //Imp el espacio en blanco ya que lo toma en concideracion
console.log(null === undefined); //No son el mismo tipo de dato.


//Convertir String a numero

const n1 = "50",
        n2 = 10,
        n3 = 'tres';

        console.log(Number(n1) + n2);//Con Number() convierto de texto a numero
        console.log(parseInt(n1) + n2);// exatamente lo mismos
        console.log(parseFloat(n1).toFixed(6) + n2);//toFixed permite mostrar o agregar una cantidad de decimales

//Convertir de numero a String

let cp;
cp = 90210;
cp = true; 
cp = String(cp)//Convierte number a string
cp = 20;
cp = cp.toString();//Exactamente l0 mismo

console.log(cp.length);
console.log(cp);
console.log(typeof cp);

//Template literals

const producto1 = 'Pizza',
    precio1 = 30,
    producto2= 'Hamburguesa',
    precio2 = 40;

    html = `
        <ul>
            <li>Orden: ${producto1}</li>
            <li>Precio: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>Precio: ${producto2}</li>
            <li>Total: ${total(precio1, precio2)}</li>
        </ul>    
    `;

    function total (precio1, precio2) {
        return precio1 + precio2;
    }

    document.getElementById('app').innerHTML = html;

    ///////////ARREGLOS/////////

    const number1 = [30, 10, 5, 40, 50];
    const number2 = [10, 20, 30, 40, 50];
    const meses = new Array('Enero', 'Febrero', 'Marzo');
    const mezclado = ['hola', 4515, true, null, undefined];
    meses.push('Abril'); // para insertar un elemento al final del arreglo
    meses.unshift('Mes 0'); //Para insertar un elemento al inicio del arreglo
    meses.shift();//Eliminar el primer elemento;
    meses.pop();//Eliminar el ultimo momento;
    meses.splice(2, 1); //Elimina la posicion pasada del primero parametro
    number1[0] = 4; //El arreglo completo no puede ser reasignado pero los valores particulares si (constante)
    

    //Para ordenar arreglos numericos
    number1.sort(function(x, y) {
        return x - y;
    });

    console.log(number1.concat(number2));//Concatena dos arreglos
    console.log(meses);
    console.log(mezclado);
    console.log(meses.length); //cantidad de elementos 
    console.log(Array.isArray(meses)); //Comprobar si es un arreglo
    console.log(meses[1]); //Imprimir el valor de la posicion.
    console.log(meses.indexOf('Abril')); //Para buscar datos dentro de un arreglo
    console.log(meses.sort());//Ordena el arreglo de String
    console.log(number1)

    //Crear un Objeto: 
    const persona = {
        nombre: 'Agustin', 
        apellido: 'Cammarota', 
        profesion: 'Programador',
        email: 'agustincammarota@hotmail.com',
        edad: 20,
        musica: ['Trance', 'Rock', 'Pop'],
        hogar: {
            ciudad: 'Buenos Aires',
            pais: 'Argentina'
        },
        fechaCumple: function() {
            return new Date().getFullYear();
        }
    }

    persona.musica.push('Alternativo');
    console.log(persona);
    console.log(persona.nombre);
    console.log(persona.hogar.ciudad);
    console.log(persona.fechaCumple());

    //Arreglo de objetos:
    const autos = [
        {
            modelo: 'Mustang', motor: 6.2
        },
        {
            modelo: 'Camaro', motor: 6.1
        },
        {
            modelo: 'Challenger', motor: 6.3
        }
    ];
//Imp los valores de una constante si se pueden modificar, solo que se debe acceder a los valores individuales. 
//No se pueden reasignar las constantes. 
    for(let i = 0; i < autos.length; i++) {
        console.log(autos[i]);
        console.log(autos[i].modelo);
    }

    console.log(autos.length);

//Funciones:
function saludar() {
    console.log('Hola agustin');
}

//Se puede declarar un valor de parametro por defecto
function saludar(nombre = 'agustin') {
    console.log(`Hola ${nombre}`);
}

function sumar(a, b) {
    console.log(a + b);
    return a + b;
}

saludar('Juan');
sumar(1, 2);
suma = sumar(3, 4);

const divicion = function(a, b) {
    return (a / b);
}

console.log(divicion(4, 6));

//IIFE permite ejecutar una funcion sin llamarla 

(function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('JS');

//Metodos de propiedad, son cuando una funcion se pone dentro de un objeto
const musica = {
    reproducir: function(id) {
        console.log(`Reproducir musica cancion id ${id}`);
    },
    pausar: function() {
        console.log(`Pausa la musica`);
    }
}

musica.reproducir(30);
musica.pausar();

//Try catch: (Intenta siempre ejecutar el try, el catch captura los errores que impiden la ejecucion del try y el finnally se ejecutara siempre).

try {
    algo();
} catch(error) {
    console.log(error);
} finally {
    console.log('No le importa, ejecuta de todos modos');
}

function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completo');
    }, 3000);
}

obtenerClientes();

//Fechas:
const diaHoy = new Date(); //Devuelve la fecha actual
let navidad = new Date('12-25-2017');
let valor2;

valor2 = diaHoy.getMonth();//mes
valor2 = diaHoy.getDate();//dia
valor2 = diaHoy.getDay();//dia 
valor2 = diaHoy.getFullYear();//anio
valor2 = diaHoy.getMinutes();//minutos
valor2 = diaHoy.getHours();//horas
valor2 = diaHoy.getTime();//milisegundos

valor2 = diaHoy.getFullYear();
valor2 = diaHoy.setFullYear(2016); //Cambiar fechas
valor2 = diaHoy.getFullYear();

console.log(valor2);

//If if/else:

const edad = 19;

if(edad > 18) {
    console.log('Si puedes entrar al sitio');
} else {
    console.log('No se puede entrar al sitio');
}

//Comprobar que una variable tiene un valor:

let puntaje;

if(puntaje) {
    console.log(`El puntaje fue de ${puntaje}`);
} else {
    console.log('No hay puntaje');
}

let horaActual = 22;
// && Y (Se cumplen ambas) / || Or (Se cumple una o la otra)
if(horaActual > 0 && horaActual <= 10) {
    console.log('Buenos Dias!');
} else if (horaActual > 10 && horaActual <= 18) { //Multiples condiciones
    console.log('Buenas tardes!');
} else {
    console.log('Buenas noches!');
}

let efectivo = 300,
    credito = 300,
    totalCarrito = 500;

if(totalCarrito < efectivo || totalCarrito < credito) {
    console.log('Puedo pagar');
} else {
    console.log('No puedo pagar');
}

const logueado = true;

//Ternario if
console.log(logueado === true ? 'Si se logeo': 'No se logeo');

//Switch (Permite tener una forma mas ordenada para comprobar multiples condiciones)

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    default: 
    console.log('El metodo de pago no es soportado');
    break;
}

// For Loops 
for(let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log('Voy en el 5');
        break; //Detiene la ejecucion si se cumple el if, Tambien existe el continuos 
    }
    console.log(`Numero: ${i}`);
}

//While
let i = 0;

while (i < 10) {
    if(i === 5) {
        console.log('Cinco');
        i++;
        break;
    }
    console.log(`Numero: ${i}`);
    i++;
}

//DoWhile corre el codigo al menos una vez aunque la condicion no se cumpla
let u = 0;

do {
    console.log(`Numero: ${u}`);
    u++;
} while (u < 20);

//ForEach:
const pendientes = ['Tarea', 'Aprender', 'JavaScript', 'Todo el dia'];

pendientes.forEach(function(pendiente) {
    console.log(`${pendiente}`);
});

//Map para recorrer un arreglo de objetos:
const carrito = [
    {id: 1, producto: 'Libro1'},
    {id: 2, producto: 'Libro2'},
    {id: 3, producto: 'Libro3'},
    {id: 4, producto: 'Libro4'}
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
});

console.log(nombreProducto);

//Iteradores:
const datos = new Map();

datos.set('nombre', 'juan');
datos.set('profesion', 'desarrollador');

console.log(datos);

//Entries iterador:
for(let entrada of datos.entries()) { //Regresa llave y valor
    console.log(entrada);
}

for(let entrada of datos) { //Regresa solo el valor
    console.log(entrada);
}

for(let entrada of datos.keys()) { //Regresa la llave
    console.log(entrada);
}

//En el window podemos encontrar muchisima informacion tanto del navegador como del usuario
let ubicacion;
ubicacion = window.location;//Info del usuario
ubicacion = window.navigator;//Info del navegador

console.log(ubicacion);

//Scope:
//Es la visibilidad que tiene un valor en js dentro de una funcion, un bloque..
var a = 'a';
let b = 'b';//variables globales que pueden ser accedidas en cualquier parte del codigo.
const c = 'c';

function funcionScope() {
    var a = 'A';
    let b = 'B';//Solo se puede acceder dentro de la funcion.
    const c = 'C';
    console.log('Funcion ' + a, b, c);
}funcionScope();

if(true) {
    var a = 'AA'; //Es el unico que reescribe el valor global de las variables
    let b = 'BB';//Por las demas solo se puede acceder dentro del bloque
    const c = 'CC';
    console.log('Bloque ' + a, b, c);
}

console.log('Globales ' + a, b, c);

//////////////////////////DOM///////////////////////////
//Cuando tenemos un archivo html, todos sus valores se encuentran dentro del Document Object ej body, head.... Dentro de este tenemos el root(Todos los elementos del html) Como seria el head(title, texto, ...) y el body(nav, h1 ..) 

let elemento1;

elemento1 = document.head;
elemento1 = document;
elemento1 = document.body;
elemento1 = document.domain;
console.log(elemento1);

/////////////////Formas de Crear un Objeto///////////

//1 Forma sencilla 
//This me permite acceder a los atributos o propiedades o metodos que quiero leer de un objeto o una clase
const cliente = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: function() {
        let tipo;

        if(this.saldo > 1000) {
            tipo = 'Gold';
        }else {
            tip = 'Normal';
        }
        return tipo;
    }
}
console.log(cliente.tipoCliente);

//2 Forma Compleja antes Anterior  a JSModerno
function Cliente(nombre, saldo) //Constructor del objeto, permite pasar argumentos al momento de crear un objeto. Se pasa para inicializar el objeto
{
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function() {
        let tipo;

        if(this.saldo > 1000) {
            tipo = 'Gold';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}
//Un objeto es como un plano comun que deben seguir la creacion de nuevos objetos
const persona = new Cliente('Perdro', 2000);
const persona2 = new Cliente('Juan', 2000); //Permite crear mas de un objeto del mismo tipo 
(Cliente)
console.log(persona);

//String
const nombre1 = 'Pedro';
const nombre2 = new String('Pedro'); //Siempre que uso el operador new estoy creando un objeto

console.log(typeof nombre2);

//Numeros
const numerO1 = 20;
const numerO2 = new Number(20);
console.log(typeof numerO2);

//Boolean
const boolean1 = true;
const boolean2 = new Boolean(true);
console.log(typeof boolean2);

////Prototipos  ante de JSModerno//////
//Un prototipo es una funcion que tiene un determinado objeto, estos se pueden crear y agregar a algun objeto. 
//1.Permite tener un codigo mas organizado al definir las funciones por fuera de la clase. 
//2. Permite que esten disponibles para un objeto particular.

function Personaje(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    // this.clasificarTipo = function() {
        // let tipo;
        // if(this.saldo > 1000) {
            // tipo = 'Gold';
        // } else {
            // tipo = 'Normal';
        // }
        // return tipo;
    // }
}

//Crear Prototipo (Funcionalidad por fuera del Objeto)
Personaje.prototype.clasificarTipo = function() {
    let tipo;
    if(this.saldo > 500) {
        tipo = 'Gold';
    }else {
        tipo = 'Normal';
    }
    return tipo;
} 
//Prototipo que imprime saldo y nombre
Personaje.prototype.nombrePersojaSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo} tipo cliente ${this.
clasificarTipo()}`;
}

//Prototipo retirar saldo
Personaje.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

function Empresa(nombre, saldo, telefono, tipo) {
    Personaje.call(this, nombre, saldo);//Heredar atriutos de la clase padre
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Personaje.prototype); //Heredar prototipo

const personaje = new Personaje('Agustin', 100);
const personaje2 = new Personaje('Luciana', 400);
const empresa = new Empresa('Udemy', 100000, 122121, 'Educacion');

console.log(personaje.clasificarTipo());
console.log(personaje.nombrePersojaSaldo());
personaje2.retirarSaldo(200);
console.log(empresa);
console.log(empresa.nombrePersojaSaldo());


//Crear clases JSModerno ES6
class Empleado {
 constructor(nombre, apellido, saldo) {
    this.nombre = nombre;
    this.apeliddo = apellido;
    this.saldo = saldo;
 }   
 imprimirSaldo() {
     return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
 }
 tipoEmpleado() {
     let tipo;
     if(this.saldo > 1000) {
         tipo = 'Gold';
     }else {
         tipo = 'Normal';
     }
     return tipo;
 }
 static bienvenida() { //No requieren crear una nueva instancia
     return `bienvenido al cajero`;
 }
}
//Cualquier metodo se agrega automaticamente al proto

const maria = new Empleado('Marias', 'Peez', 1000);
console.log(maria.imprimirSaldo());
console.log(maria.tipoEmpleado());
//estatico 
console.log(Empleado.bienvenida());

//Herencia en ES6 

class Empresas extends Empleado {
    constructor(nombre, saldo, telefono, tipo) {
        super(nombre, saldo); //Para leer los valores del constructor padre
        this.telefono = telefono; 
        this.tipo = tipo;
    }
    static bienvenida() { //Para sobreescribir un metodo, basta con definirlo con el mismo 
nombre.
            return `bienvenido al cajero de la empresa`;
        }
}

const empresas = new Empresas('Empres1', 10000, 344234234, 'Construccion');

console.log(empresas);
console.log(empresas.tipoEmpleado()); //Puedo acceder a metodos de la clase hija sin necesidad de agregar nada al prototype
console.log(Empresas.bienvenida());

