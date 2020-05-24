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
