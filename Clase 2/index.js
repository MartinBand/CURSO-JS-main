// let avanzar = true

// if(avanzar){
//     console.log ('puede avanzar')
// } else {
//     console.log ('no puede avanzar')
// }


// Estructura condicional anidada

// let nota1 = parseInt(prompt('Ingrese nota 1'))
// let nota2 = parseInt(prompt('Ingrese nota 2'))
// let nota3 = parseInt(prompt('Ingrese nota 3'))

// let promedio = (nota1+nota2+nota3)/3 //aca no se pone parseInt porque ya se puso en la variable y lo considera numericos.

// if(promedio>=7){
//     console.log('Aprobado')
// } else {
//     if(promedio>=4){
//         console.log('Regular')
//     } else {
//         console.log('Desaprobado')
//     }
// } 

//Operadores logicos y &&

// let nota1 = parseInt(prompt('Ingrese nota 1'))
// let nota2 = parseInt(prompt('Ingrese nota 2'))
// let nota3 = parseInt(prompt('Ingrese nota 3'))

// if(nota1>nota2 && nota1>nota3){
//     console.log('La nota 1 es la mayor')
// }else{
//     if(nota2>nota3){
//         console.log('la nota 2 es la mayor')
//     }else{
//         console.log('la nota 3 es la mayor')
//     }
// }

//Operadores cortocircuito o circuito corto

// let avanzar=true

// avanzar && console.log('podes avanzar')

//Operadores logicos o ||

// let dia = parseInt(prompt('Ingrese dia'))
// let mes = parseInt(prompt('Ingrese mes'))
// let anio = parseInt(prompt('Ingrese año'))

// if(mes==01 || mes==02 || mes==03){
//     console.log('corresponde al primer trimestre del año')
// }

/*let nombre = prompt('Ingrese su nombre completo')
alert(nombre)*/

// let edad = prompt('Ingrese su edad')
// alert(edad)

// let tieneHijos = false
// alert(tieneHijos)


// let salario = prompt('Ingrese el salario')
// let salarioAnulizado = (salario*12)
// alert(`El salario anual es $ ${salarioAnulizado}`)

// if(edad>=18){
//     console.log('Eres mayor de edad')
// } else {
//     alert('Eres menor de edad')
// }

// let tieneHijos = true

// if(tieneHijos){
//     console.log('Tiene hijos')
// } else {
//     console.log('No tiene hijos')
// }

// let genero = prompt('Ingrese si es hombre (H) o mujer (M)')

// if(genero==('H')){
//     console.log('Es Hombre')
// } else {
//     console.log('Es Mujer')
// }

// let genero = 'M'

// if(genero==('H')){
//    console.log('Es Hombre')
// } else {
//    console.log('Es Mujer')
// }

// let lado = prompt ('ingrese la medida en cm del lado del cuadrado')
// let perimetro = (lado*4)
// console.log(`el perimetro es ${perimetro} centimetros`)

// let numero1 = parseInt(prompt ('ingrese el primer numero'))
// let numero2 = parseInt(prompt ('ingrese el segundo numero'))
// let numero3 = parseInt(prompt ('ingrese el tercer numero'))
// let numero4 = parseInt(prompt ('ingrese el cuarto numero'))

// let suma1y2 = (numero1+numero2)
// let multiplicacion3y4 = (numero3*numero4)

// console.log(`la suma del numero1 y numero2 es ${suma1y2}`)
// console.log(`la multiplicacion del numero3 y numero4 es ${multiplicacion3y4}`)

// let numero5 = parseInt(prompt ('ingrese un numero entre 1 y 99'))

// if(numero5<=9){
//     console.log('El numero tiene un digito')
// } else{
//     console.log('El numero tiene dos digitos')
// }

// let numero5 = parseInt(prompt ('ingrese un numero entre 1 y 99'))
// numero5 <=9 ? console.log('El numero tiene un digito') : console.log('El numero tiene dos digitos')

// let numero6 = parseInt(prompt ('ingrese un numero entero'))

// if(numero6<0){
//     console.log('El numero es negativo')
// } else{
//     if(numero6>0){
//         console.log('el numero es positivo')
//     } else{
//     console.log('el numero es cero')
// }
// }


// let tienePermiso=true
// let edad = prompt('Ingrese su edad')

// if(edad>=18 && tienePermiso){
//     console.log('puede conducir')
// } else{
//     console.log('no puede conducir')
// }

// (edad>=18 && tienePermiso) ? console.log('puede conducir') : console.log('no puede conducir')

// let tieneDinero = true
// let tieneTarjeta = false

// if(tieneDinero || tieneTarjeta){
//     console.log('puede pagar')
// } else {
//     console.log('no tienes suficiente dinero')
// }


// let esJueves=false

// if(!(esJueves)){
//     console.log('es Jueves')
// } else {
//     console.log('no es Jueves')
// }


// let dia = prompt('Ingrese un dia')
// let mes = prompt('Ingrese un mes')


// if(dia==25 && mes==12){
//     console.log('Es navidad')
// }

let salario = prompt('Ingrese su salario actual')
let antiguedad = prompt('ingrese su antigüedad en años')
let salario20 = (salario*1.2)
let salario5 = (salario*1.05)

if(salario<500 && antiguedad>=10){
    console.log(`Su nuevo sueldo es ${salario20}`)
} else {
    if(salario>=500){
        console.log(`Su sueldo es ${salario}`)
    } else {
        console.log(`Su nuevo sueldo es ${salario5}`)
    }
}







