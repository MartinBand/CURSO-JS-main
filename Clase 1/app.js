// let nombre ='juan pedro'
// let edad = 36
// let estadoCivil = 'casado'
// let sabeProgramar = false

// console.log ('Tu nombre es ', nombre, ', tenes ', edad, ' años,', ' tu estado civil es ', estadoCivil)

// console.log ('Tu nombre es ' + nombre + ', tenes ' + edad + ' años,' + ' tu estado civil es ' + estadoCivil)

// //template string

// console.log(`Tu nombre es ${nombre}, tenes ${edad} años y tu estado civil es ${estadoCivil}`)

//entrada de datos por teclado

// let nombre = prompt('ingrese su nombre')
// console.log(nombre)

// let edad = prompt('ingrese su edad')
// console.log(edad)

//operadores matematicos

// let numero1 = prompt ('Ingrese el primer numero')

// let numero2 = prompt ('Ingrese el segundo numero')

// let resultadoMulti = numero1*numero2 //muestra la multiplicacion de los numeros ingresados
// let resultadoDivi = numero1/numero2 //muestra la division de los numeros ingresados
// let resultadoRestoDivi = numero1 % numero2 //muestra el resto de la division de los numeros ingresados, es decir, realiza la division pero no la muestra.
// let resultadoResta=numero1-numero2//muestra la resta de los numeros ingresados
// let resultadoSuma=numero1+numero2//En este caso, planteado asi, nos concatenaria los numeros que coloquemos.

//para solucionarlo

// let numero1=0
// console.log(typeof(numero1))//si consulto aca, me dice que es numerico

// let numero2=0
// console.log(typeof(numero2))//si consulto aca, me dice que es numerico

// numero1 = parseInt(prompt ('Ingrese el primer numero'))
// console.log(typeof(numero1))//si consulto aca, me dice que es numerico

// numero2 = parseInt(prompt ('Ingrese el segundo numero'))
// console.log(typeof(numero2))//si consulto aca, me dice que es numerico

// let resultadoSuma = numero1 + numero2
// console.log(resultadoSuma)
// //de esta forma, al realizar el prompt no convierte el numero a string y lo deja numérico y realiza la suma dando como resultado 20.

// estructura condicional simple

/*if(variable <(OR) (variabledos o number o string o boolean)){

}*/

//(1-variable, 2-operador relacional, 3-variable o valor (del tipo number, string o boolean))

/*Operadores relacionales: >, <, >=, <=,!= distinto, == igual igual, === estrictamente igual*/


// let nota=parseInt(prompt('ingrese la nota del alumno'))

// if(nota>=5){
//             console.log('aprobo la materia')
// }

// Estructura condicional compuesta

let notaAprobada=5

let nota=parseInt(prompt('ingrese la nota del alumno'))

// if(nota>=notaAprobada){
//             console.log('aprobo la materia')
// } else{
//     console.log('no aprobaste la materia')
// }

//operador ternario: solo para estructura condicional compuesta, no para simple o anidado.
// se obvia la palabra if, los parentesis, las llaves

nota>=notaAprobada ? console.log('aprobo la materia') : console.log('no aprobaste la materia')

