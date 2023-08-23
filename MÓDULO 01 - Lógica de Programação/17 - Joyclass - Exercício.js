// Você deve criar três listas em JavaScript:

// 1. para guardar os nomes de dez pessoas;
// 2. para guardar as suas idades;
// 3. para guardar as suas cores favoritas.

// Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar, imprima novamente todas as informações das três listas.
 
// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

// RESPOSTA:

let nome = ['José', 'João', 'Joaquim', 'Lucas', 'Francisco', 'Maria', 'Luiza', 'Clara', 'Cecília', 'Ana'];
let idade = [5, 8, 12, 13, 15, 4, 7, 11, 14, 16];
let cor = ['cinza', 'vermelha', 'azul', 'laranja', 'verde', 'lilás', 'branca', 'roxa', 'rosa', 'preta'];

console.log(nome, idade, cor);

idade.splice(0, 1, 6);
cor.splice(3, 1, 'bege');

console.log(nome, idade, cor);

