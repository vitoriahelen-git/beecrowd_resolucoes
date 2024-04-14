// A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
// Considerando para este problema que π = 3.14159:

// - Efetue o cálculo da área, elevando o valor de raio ao quadrado 
// e multiplicando por π.

// Entrada
// A entrada contém um valor de ponto flutuante (dupla precisão), 
// no caso, a variável raio.

// Saída
// Apresentar a mensagem "A=" seguido pelo valor da variável area, 
// conforme exemplo abaixo, com 4 casas após o ponto decimal. 
// Utilize variáveis de dupla precisão (double). Como todos os problemas, 
// não esqueça de imprimir o fim de linha após o resultado, caso contrário, 
// você receberá "Presentation Error".


//Solução 1 usando .shift
var input = require('fs').readFileSync('/dev/stdin','utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift()); 
var n = 3.14159, area; 
area = n * (raio*raio); 
console.log("A="+area.toFixed(4)); 




//Solução 2 usando readline 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); 

readline.question('', (raio) => {
    var n = 3.14159, area; 
    area = n * (parseFloat(raio) * parseFloat(raio));
    console.log("A="+ area.toFixed(4))
    readline.close(); 
})
