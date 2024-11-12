// metodos del array

//let numeros=[5,8,9,7,2,6,1,10]

//let palabras =['Paola', 'Alejandra', 'Micaela', 'Laura', 'Andrea'] 

//numeros.push(29) agrega el 29 al final

//numeros.pop() saca el ultimo elemento pero no lo elimina

//numeros.shift() saca el primer elemento pero no lo elimina

//numeros.unshift(23,'hola mundo') agrega un numero al incio del array

//numeros.reverse() me invierte el array

// console.log (numeros.lastIndexOf(5)) me indica la posicion en el array del numero entre parentesis, en este caso, del 5

// console.log (numeros.lastIndexOf(95)) si coloco un numero que no esta en el Array, me devuelve -1, indicando eso

//console.log (numeros.join('-')) //devuelve los valores del array como un string

//numeros.sort() ordena los numeros del array por el primer digito

//palabras.sort () te ordena teniendo en cuenta la primer letra del elemento. Si hay dos iguales, considera la segunda letra y asi sucesivamente

/*numeros.sort (function(a,b){
    return a-b
})

console.log(numeros)*/

//let lista = document.getElementById('lista')

// let body = document.getElementById(`cuerpo`)

// let micolor = prompt(`Ingrese un color`)

// body.style.backgroundColor = `${micolor}`


//lista.innerText = `Hola Mundo`

//let texto =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos vitae adipisci eveniet maxime possimus. Impedit nemo repellat nam maxime hic alias, aperiam tempora fugit est aliquam saepe, voluptatum quibusdam.`

//console.log(texto.length)


//let palabras =['Paola', 'Alejandra', 'Micaela', 'Laura', 'Andrea',`Romina`] 

//console.log(palabras.length)
/*let recorrer = palabras.length

for(let i=0;i<recorrer;i++){
    console.log(palabras[i])
    lista.innerHTML += `<li>${palabras[i]}</li>`
}*/

// let numeroAleatoreo = Math.random() * 50

// let resultadoFinal = Math.floor (numeroAleatoreo)

// console.log (resultadoFinal)


// let hex=[0 ,1 ,2 ,3 ,4 ,5 ,6 , 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

// let cuerpo=document.getElementById('cuerpo')
// let textoColor=document.getElementById('textoColor')

// function hacerClick(){
// let hexcolor='#'

// for (let i=0;i<6;i++){
//     hexcolor=hexcolor + hex[obtenerNumero()]
//     console.log (hexcolor)
// }
// cuerpo.style.backgroundColor=hexcolor
// textoColor.innerText=hexcolor
// }

// function obtenerNumero (){
//     let resultado = Math.floor(Math.random() * hex.length)
//     return resultado
// }

let hora = document.getElementById('hora')

let miVariable= new Date()
console.log (miVariable)
function miHora(){
let miVariable= new Date()
hora.innerHTML= `${miVariable.getHours()}:${miVariable.getMinutes()}:${miVariable.getSeconds()}`
}
setInterval(miHora,1000)