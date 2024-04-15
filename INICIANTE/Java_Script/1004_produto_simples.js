// Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores 
// e atribua esta operação à variável PROD. A seguir mostre a variável 
// PROD com mensagem correspondente.   

// Entrada
// O arquivo de entrada contém 2 valores inteiros.

// Saída
// Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, 
// com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o
// fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

const lerTeclado = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout 
})

lerTeclado.question('', VALOR1 => {
    lerTeclado.question('', VALOR2 => {
        var PROD = parseInt(VALOR1) * parseInt(VALOR2); 
        console.log('PROD = %d', PROD); 
    })
})
