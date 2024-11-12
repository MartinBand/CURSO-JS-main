// estructura repetitiva while

/*while(condicion){ 
    si es V entonces se ejecuta. Sino sale
}*/

/*let x=0
while(x<=100){
    console.log(x)
}//esto se conoce como ciclo infinito ya que no termina nunca*/

// let x=0
// while(x<=10){
//     console.log(x)
//     x=x+1 //contador
// }

// concepto del acumulador

// let x=1

// while(x<=5){
//     let valor = parseInt(prompt('Ingrese un valor'))
//     console.log (valor)
//     x=x+1
// }

// let x=1
// suma=0
// while(x<=5){
//     let valor = parseInt(prompt('Ingrese un valor'))
//     console.log (valor)
//     suma=suma+valor // acumulador
//     x=x+1
// }
// console.log(`La suma total de los valores ingresados es igual a ${suma}`)

//ciclo repetitivo for

//for(inicializacion; condicion; incremento o decremento){}

// for (let i=0; i<=10; i=i+1){
//     console.log(i)
// }

// let suma = 0
// for (let i=0; i<10; i=i+1){
//     console.log(i)
//     let valor = parseInt(prompt(`Ingrese un valor`))
//     if(i>=5){
//         suma = suma + valor
//         console.log(suma)
//     }
// }
// console.log(`la suma de los ultimos 5 numeros es ${suma}`)

// funciones 3 pasos

// 1- funciones declaracion

// mostrarMensaje()

// function mostrarMensaje(){
//     console.log('hola mundo')
// }

// 2 - declaracion de parametros

// function mostrarNombre (a){
//     console.log (a)
// }

// let nombre = prompt ('Ingrese un nombre')

// mostrarNombre (nombre)

function multiplique(a,b){
 let resultado = a*b
 return resultado
}

let num1 = prompt('Ingrese primer valor')
let num2 = prompt('Ingrese segundo valor')

console.log(multiplique(num1,num2))

// 3 - funcion que retorna un valor

// function calcularTabla (){
//     let resultado=0
//     let i=1
//     let palabra=''
//     let valor = parseInt(prompt(`Ingrese un valor para mostrar tabla de multiplicar`))
//     for(i=1; i<=10; i=i+1){
//         resultado = i*valor
//         palabra = palabra + `${valor} * ${i} = ${resultado}
//         `
//     }
//     return palabra
// }

// console. log (calcularTabla ())






