/*
- Conversão de tipos: ocorre explicitamente, de forma direta

- Coerção de tipos: ocorre implicitamente

*/

console.log(typeof Number("9")) // Conversão de tipos

let value = "9"
console.log(typeof value)
console.log(typeof Number(value))


let age = 18 
console.log(typeof age.toString())
console.log(typeof String(age))


let option = 0
console.log(Boolean(option))
console.log(typeof Boolean(option))



console.log(typeof (5 + "2")) // Coerção de tipos