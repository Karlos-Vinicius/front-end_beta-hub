console.log(nome)

var nome = "Karlos Vinícius Carvalho de Oliveira"

/*  HOISTING - Só funciona com o var
Ele traz as variáveis com o escopo global para cima

var nome

console.log(nome)

nome = "Karlos Vinícius Carvalho de Oliveira"

*/

var email = "ex@ex.com"

{
    console.log(email)
}

{
    // let age = 18 - O let respeita o escopo
}

console.log(age)

let address = "Rua X"
{
    console.log(address) // Hierarquia de bloco
}