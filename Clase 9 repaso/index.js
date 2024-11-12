
// // funcion nombrada

// function sumar (a, b) {
//     return a+b
// }

// // funcion flecha

// const sumarArrow = (a, b) => a + b
// /*retorno implicito. el retorno esta en la flecha. Si coloco las llaves, si tengo que poner return a + b*/

// // anonima

// console.log(((c, d) => c + d) (1, 1))

let btnClickHTML = document.getElementById (`btn-click`)

btnClickHTML.addEventListener(`click`, (e)=> console.log (e.target))