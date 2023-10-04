// Codifique a solução mais eficiente para buscar o número 20 no array.

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

// RESPOSTA:

function buscaLinear(array, elementoBuscado) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementoBuscado) {
      return i;
    }
  }
  return -1;
}

const listaNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const numeroProcurado = 20;

const indiceEncontrado = buscaLinear(listaNumeros, numeroProcurado);
if (indiceEncontrado !== -1) {
  console.log(`O número ${numeroProcurado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
  console.log(`O número ${numeroProcurado} não foi encontrado na lista.`);
}
