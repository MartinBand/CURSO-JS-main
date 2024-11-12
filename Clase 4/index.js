/*
//1 Imprime los números del 1 al 10

let imprimir =''
for (i=1;i<=10;i=i+1){
    imprimir= imprimir + `${i} `
}

console.log (imprimir)

// 2)Imprime los números pares del 2 al 20

let imprimirPares =''
for (i=2;i<=20;i=i+2){
    imprimirPares= imprimirPares + `${i} `
}

console.log (imprimirPares)


// 3)Imprime los números impares del 1 al 19

let imprimirImpares =''
for (i=1;i<=20;i=i+2){
    imprimirImpares= imprimirImpares + `${i} `
}

console.log (imprimirImpares)

// 4)Imprime los números del 10 al 1 en orden inverso

let imprimirInverso =''
for (i=10;i>=1;i=i-1){
    imprimirInverso= imprimirInverso + `${i} `
}

console.log (imprimirInverso)

//5)Imprime los números del 1 al 10, pero se detiene al llegar al 5

let imprimir5 = ''
for (let i=1; i<=10; i=i+1){
    if(i<=5){
        imprimir5 = imprimir5 + `${i} `
    }
}
console.log(imprimir5)


//6)Imprime los números del 1 al 10, pero salta el 5

let imprimirSin5 = ''
for (let i=1; i<=10; i=i+1){
    if(i!=5){
        imprimirSin5 = imprimirSin5 + `${i} `
    }
}
console.log(imprimirSin5)

//7)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre

function decirNombre(nombre){
    alert(`Hola ${nombre}`)
}

let nombre = prompt ('Ingrese su nombre')

decirNombre(nombre)

//8)Crea una función llamada saludar(nombre) y nos devuelva un string “Hola “ + nombre y luego invoca la función dentro de una alerta

function saludar(nombre){
    return `Hola ${nombre}`
}

let nombre1 = prompt ('Ingrese su nombre')

alert(saludar(nombre1))

//9)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b

function sumar(a,b){
    let resultado = a + b
    return resultado
}

let num1 = parseInt(prompt ('Ingrese numero 1'))
let num2 = parseInt(prompt ('Ingrese numero 2'))

console.log(sumar(num1,num2))

//10)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b

function restar(a,b){
    let resultado = a - b
    return resultado
}

let num3 = parseInt(prompt ('Ingrese numero 1'))
let num4 = parseInt(prompt ('Ingrese numero 2'))

console.log(restar(num3,num4))

//11)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null

function calcular(operacion,a,b){
    if(operacion=='+'){
        let resultado=a+b
        return resultado
    }else{
        if(operacion=='-'){
            let resultado=a-b
            return resultado
        }else{
            let resultado=null
            return resultado
        }
    }
}
let operacion = prompt ('Ingrese + o -')
let num5 = parseInt(prompt ('Ingrese numero 1'))
let num6 = parseInt(prompt ('Ingrese numero 2'))

console.log(calcular(operacion,num5,num6))

//12)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

function contarHasta(numero){
    let palabra=''
    for(i=0;i<=numero;i++){
        palabra=palabra + `${i} `
    }
    return palabra
}

let num7 = prompt ('Ingrese un numero')

console.log (contarHasta(num7))

//13)Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.


function calculadora (operacion, a, b){
    if(operacion=='+'){
        let resultado = a + b
        return resultado
    } else{
        if(operacion=='-'){
            let resultado = a - b
            return resultado
        }else{
            if(operacion=='/'){
                let resultado = a/b
                return resultado
            }else{
                let resultado = a*b
                return resultado
            }
        }
    }
}

for (let respuesta=prompt ('¿Desea utilizar la calculadora?(SI/NO):');respuesta=='SI' || respuesta=='si'|| respuesta=='Si' || respuesta=='sI';){
    let operacion = prompt('Ingrese operacion matematica')
    let num8 = parseFloat(prompt('Ingrese un numero'))
    let num9 = parseFloat(prompt('Ingrese otro numero'))
    alert(`el resultado es ${calculadora(operacion, num8, num9)}`)
    respuesta = prompt ('¿Desea utilizar la calculadora?(SI/NO):')
}

alert('el programa a finalizado')


//14)hacer un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..no se ingresan valores por teclado.

let palabra =''
let inicial = 11
for (i=0;i<=24;i++){
  let term = inicial + i*11
  palabra = `${palabra} ${term} `
}

console.log(palabra)


//15)hacer un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.



let contarPar = 0
let contarImpar = 0

for(i=0;i<5;i++){

    let num10 = parseInt(prompt(`Ingrese el numero ${i+1}`))

    if(num10 % 2 === 0){
        contarPar = contarPar + 1
    }else{
        contarImpar = contarImpar + 1
    }
}

console.log(`la cantidad de numeros pares es ${contarPar} y de impares es ${contarImpar}`)


*/
//16)hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas.

/*let suma = 0

for(i=0;i<5;i++){
    let altura = parseInt (prompt(`Ingrese la altura de la persona ${i+1} en centimetros`))
    suma = (suma + altura)
}

let promedio = suma/(i)
console.log(`el promedio de las cinco alturas es ${promedio}`)*/


/*17)Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un
promedio de edades mayor.*/



/*function ingresarEdades (numeroEdades){
    let suma = 0
        for(i=0;i<numeroEdades;i++){
            let edad = parseInt (prompt(`Ingrese la edad de la persona ${i+1}`))
            suma = suma + edad
        }
    return suma/numeroEdades
}

let promediom = ingresarEdades (5)
let promediot = ingresarEdades (6)
let promedion = ingresarEdades (11)

console.log(`el promedio de las edades del turno mañana es ${promediom}, el promedio de las edades del turno tarde es ${promediot} y el promedio de las edades del turno noche es ${promedion} `)

if (promediom>promediot && promediom>promedion){
    console.log (`El turno mañana posee un promedio de edades mayores`)
} else {
    if (promediot>promedion){
        console.log (`El turno tarde posee un promedio de edades mayores`)
    } else {
        console.log (`El turno noche posee un promedio de edades mayores`)
    }
}*/


/*18)Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.*/


/*let contarNegativos = 0
let contarPositivos = 0
let contarMultiplos = 0
let suma = 0

for (i=0; i<10; i++){
    let num11 = parseInt (prompt(`Ingrese el ${i+1}`))
    console.log(num11)
    if(num11>=0){
        contarPositivos += 1
    } else {
        contarNegativos += 1
    }

    if(num11%15===0){
        contarMultiplos += 1
    }

    if (num11%2===0){
        suma += num11
    }
}

console.log(`la cantidad de numeros positivos es ${contarPositivos} y la de numeros negativos es ${contarNegativos}. Existen ${contarMultiplos} multiplos de 15 y la suma de los numeros pares es ${suma}`)*/


/*19)hacer un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad.*/

/*function tipoTriangulo (a,b,c){
    if(a==b && c==b){
        return `El triangulo es equilatero`
    }else{
        if(a==b || b==c || a==c){
            return `El triangulo es isosceles`
        }else{
            return `El triangulo es escaleno`
        }
    }
}

let ladoa = 0
let ladob = 0
let ladoc = 0
let contarequi = 0
let contariso = 0
let contaresca = 0

for (i=0; i<4; i++){   
    ladoa = parseInt(prompt(`Ingrese lado a del triangulo ${i+1}`))
    ladob = parseInt(prompt(`Ingrese lado b del triangulo ${i+1}`))
    ladoc = parseInt(prompt(`Ingrese lado c del triangulo ${i+1}`))
    console.log (tipoTriangulo (ladoa,ladob,ladoc))

    if(ladoa==ladob && ladoc==ladob){
        contarequi += 1
    }else{
        if(ladoa==ladob || ladob==ladoc || ladoa==ladoc){
            contariso += 1
        }else{
            contaresca += 1 
        }
    }   
}

console.log (`Existen ${contarequi} triangulos equilateros, ${contariso} isosceles y ${contaresca} escalenos`)

if(contarequi<contariso && contarequi<contaresca){
    console.log (`Hay menor cantidad de triangulos equilateros`)
}else{
    if(contariso<contaresca){
        console.log (`Hay menor cantidad de triangulos isosceles`)
    }else{
        if(contarequi==contariso && contarequi<contaresca){
            console.log (`Hay menor cantidad de triangulos equilateros e isosceles`)
        }else{
            if(contarequi==contaresca && contarequi<contariso){
                console.log (`Hay menor cantidad de triangulos equilateros y escalenos`)
            }else{
                if(contariso==contaresca && contariso<contarequi){
                    console.log (`Hay menor cantidad de triangulos isosceles y escalenos`)
                }else{
                    console.log (`Hay menor cantidad de triangulos escalenos`)
                }
            }
        }
    }
}*/


/*20)hacer una función que solicite la carga de dos enteros (primero el menor y luego el
mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
4 5 6 7 8 9 10*/


/*let nummen = parseInt(prompt(`Ingrese el numero menor`))
let nummay = parseInt(prompt(`Ingrese el numero mayor`))
let serie = ""

for(i=nummen;i<=nummay;i++){
    serie = `${serie} ${i}`
}

console.log (serie)*/

//21)Hacer una función que reciba tres enteros y retorne el promedio.


/*let num1 = parseInt(prompt(`Ingrese el primer numero`))
let num2 = parseInt(prompt(`Ingrese el segundo numero`))
let num3 = parseInt(prompt(`Ingrese el tercer numero`))


function prome (a,b,c) {
    let promedio = (a+b+c)/3
    return (promedio)
}

console.log (`el promedio es ${prome (num1,num2,num3)}`)*/

//22)Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.

//23) hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡

//24)Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

//25)Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

//26)Definí una función generarEmail que reciba como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

/*27)Necesitamos un programa que pida ingresar una cantidad de grados Celsius, mediante el siguiente mensaje:
● Ingresá una cantidad de grados Celsius
Con esta información, el programa deberá mostrar la conversión de grados Celsius a grados
Fahrenheit con el mensaje: La conversión de {grados} grados Celsius a Fahrenheit es:
{resultado}*/

/*28)Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
● Ingresá la distancia del recorrido
Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar el
recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje:
Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta}
hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} hora/s
Las velocidades de los medio de transporte son:
● a pie : 5 km/ hs
● bicicleta : 10 km/ hs
● auto : 50 km/hs*/ 

/*29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
puedeVerPelicula(12, true)
true
puedeVerPelicula(16, false)
true
puedeVerPelicula(18, true)
true

/*30)Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
esVocal('n')
false
esVocal('e')
true*/




















/*
let imprimir = ''
for (let i=1; i<=10; i=i+1){
    imprimir = `${imprimir} ${i}
    `
}

console.log(imprimir)

//2

let pares = ''
for (let i=2; i<=20; i=i+2){
    pares = `${pares} ${i}
    `
}

console.log(pares)

//3

let inpares = ''
for (let i=1; i<20; i=i+2){
    inpares = `${inpares} ${i}
    `
}

console.log(inpares)

//4

let inverso = ''
for (let i=10; i>0; i=i-1){
    inverso = `${inverso} ${i}
    `
}

console.log(inverso)

//5

let imprimir5 = ''
for (let i=1; i<=5; i=i+1){
    imprimir5 = `${imprimir5} ${i}
    `
}

console.log(imprimir5)

//6

let imprimirsin5 = ''

for (let i=1; i<=10; i=i+1){
    if(i!=5){
        imprimirsin5 = `${imprimirsin5} ${i}
        `
    }
   
}
console.log(imprimirsin5)

//7

function decirNombre(nombre){
    alert("Hola " + nombre);
}

decirNombre("Juan");

//8

function saludar(nombre){
    return (`Hola ${nombre}`)
}

alert(saludar('Juan'))

//9

function sumar (a,b){
    resultado = a + b
    return resultado
}

console.log (sumar (5,6))

//10

function restar (a,b){
    resultado = a - b
    return resultado
}

console.log (restar (5,6))

//11

function calcular(operacion,a,b){
    if(operacion=='+'){
        resultado = a+b
        return resultado
    } else {
        if(operacion=='-'){
            resultado = a-b
            return resultado
        } else {
            (resultado = null)
            return resultado
        }
    }
}

console.log (calcular('/',3,5))

//12

/*Crea una función llamada contarHasta(número) y nos cuente hasta ese número por
consola*/
/*
function contarHasta(numero){
    let contar=''
    for(i=0;i<=numero;i=i+1)
    contar = `${contar} ${i} -`
    return contar
}

console.log (contarHasta(10))

//13

/*Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI”
ejecutaras el siguiente algoritmo. Solícita al usuario un número, otro número y una
operación, luego con los valores ingresados ejecuta la función calcular para mostrar el
resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a
usar la calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El
programa ha finalizado”.*/

/*
let respuesta=''

do{

respuesta = prompt('¿Desea utilizar la calculadora?')

if (respuesta == 'SI' || respuesta == 'si' || respuesta == 'Si' || respuesta == 'sI'){
    let operacion = prompt('Ingrese operacion matematica a realizar')
    let num1 = parseFloat(prompt('Ingrese primer numero'))
    let num2 = parseFloat(prompt('Ingrese segundo numero'))
    alert (`el resultado es ${calcu (operacion,num1,num2)}`)
} else{
    alert ('el programa a finalizado')
}
}while (respuesta == 'SI' || respuesta == 'si' || respuesta == 'Si' || respuesta == 'sI')


function calcu (a, b, c){
    if(a=='+'){
        resultado = b+c
        return resultado
    } else {
        if (a=='-'){
            resultado = b-c
            return resultado
        } else {
            if (a=='*'){
                resultado = b*c
                return resultado
            } else {
        resultado = b/c
        return resultado
    }
    }
    }
}

//14

/*hacer un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..no
se ingresan valores por teclado.*/
/*

let serie=''

for(let numero=11; numero<=276; numero=numero+11){ 
serie=`${serie} ${numero}`
}


console.log (serie)

*/