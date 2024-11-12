"use strict"

//negacion

// let esVerdadero = true

// if(!esVerdadero){
//     console.log (`salio verdadero`)
// }else{
//     console.log (`salio falso`)
// }

// !esVerdadero? console.log (`salio verdadero`) : console.log (`salio falso`)

//funciones

// const pi = 3.14

// pi = 2.54

// funciones del tipo flecha (arrow) se usan mucho en Javascript (solamente)

// const mifuncion=()=>{
//     console.log(`hola mundo`)
// }

// mifuncion()

// // funciones anonimas

// ()=>{
    
// }

//SCOPES, tambien llamado AMBITOS

// let edad = 40

// if(true){
//     var nombre = 'pepe'
//     edad = 30
//     const apellido ='Bandoni'
//     console.log (apellido)
// }

// console.log (edad)

// let usuario = document.getElementById (`ingreseUsuario`)
// let form = document.getElementById (`formulario`)

// let usuarioValido = `Martin`

// const enviarFormulario = (event) => { 
//     event.preventDefault()
    
//     let usuario = event.target.ingreseUsuario.value

//     if(usuario==usuarioValido){
//         console.log(`usuario correcto`)
//     }else{
//         console.log(`Usuario Incorrecto`)
//     }

//     console.log (usuario)
// }

// form.addEventListener('submit', enviarFormulario)

// console.log(usuario)

// console.log(usuario.value)


let btnSumar=document.getElementById(`btn`)

const sumarValores = ()=>{ 

let numeroUno=parseFloat(document.getElementById(`numeroUno`).value)
let numeroDos=parseFloat(document.getElementById(`numeroDos`).value)
let resultadoSuma= document.getElementById(`resultadoSuma`)

let resultado = numeroUno + numeroDos
console.log(resultado)
resultadoSuma.innerText=resultado
}


btnSumar.addEventListener('click', sumarValores)



console.log(document.getElementById(`numeroUno`).value)
console.log(numeroUno)
console.log(numeroDos)

