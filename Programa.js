const prompt = require('prompt-sync')();

console.log()
console.log('****************************************************')
console.log('Realize aqui sua divisão')
console.log('****************************************************')
console.log()
let num1 = prompt('Dividendo: ');
let num2 = prompt('Divisor: ');
console.log()

try {
  if (num2 == 0) {
    throw 'Divisão por zero não é permitida.';
  } else {
    let resultado = num1 / num2;
    console.log('O resultado da divisão é: ' + resultado);
    console.log()
  }
} catch (erro) {
  console.log('Ocorreu um erro: ' + erro);
  console.log()
} finally {
  console.log('Obrigada por utilizar nosso programa!');
  console.log()
}
console.log('****************************************************')
console.log()
