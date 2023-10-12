console.log()
const prompt = require('prompt-sync')();
const operador = prompt('Escolha o operador: \n( + ) Adição \n( - ) Subtração \n( * ) Multiplicação \n( / ) Divisão \n\n');

console.log()
const numero1 = parseFloat(prompt('Digite o primeiro número: '));
const numero2 = parseFloat(prompt('Digite o segundo número: '));
console.log()

let resultado;
let restoDivisao;


if (operador == '+') {
    resultado = numero1 + numero2;
    console.log(`O resultado da soma é: ${resultado}`);
} else if (operador == '-') {
    resultado = numero1 - numero2;
    console.log(`O resultado da subtração é: ${resultado}`);
} else if (operador == '*') {
    resultado = numero1 * numero2;
    console.log(`O resultado da multiplicação é: ${resultado}`);
} else {
    resultado = numero1 / numero2;
    restoDivisao = numero1 % numero2;
    console.log(`O resultado da divisão é: ${Math.trunc(resultado)}\nA divisão possui o resto: ${restoDivisao}`);
}
console.log()


