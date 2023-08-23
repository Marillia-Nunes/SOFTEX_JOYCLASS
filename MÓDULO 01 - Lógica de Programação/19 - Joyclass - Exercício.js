// Considere o array [3, 7, 9, 1, 0].

// O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
// Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

// RESPOSTA:

// FILA

// Uma fila é uma estrutura de dados linear que segue o princípio do "primeiro a entrar, primeiro a sair" (FIFO: First-In-First-Out). Isso significa que o primeiro elemento inserido na fila é o primeiro a ser removido. Em JavaScript, o array possui o método associado shift().

let arrayFila = [3, 7, 9, 1, 0];
arrayFila.shift();
console.log(arrayFila);

// Assim sendo, as remoções ocorrerão conforme demonstrado abaixo:

// [3, 7, 9, 1, 0]
// [7, 9, 1, 0]
// [9, 1, 0]
// [1, 0]
// [0]
// []
// */


// LISTA

// As listas em programação são formas estruturadas de armazenar e gerenciar conjuntos de elementos de maneira sequencial. Elas nos permitem manipular informações de maneira eficiente e realizar operações específicas em seus elementos. Os elementos podem ser removidos independente da ordem de inserção. Em JavaScript, o array possui o método associado splice().  

let arrayLista = [3, 7, 9, 1, 0];
arrayLista.splice(0);
console.log(arrayLista);

// Se colocarmos arrayLista.splice(0), o resultado será [].


// PILHA

// As pilhas são estruturas de dados que se assemelham a um empilhado de objetos, onde o último item adicionado é o primeiro a ser removido. Essa ordem de operação é conhecida como Last-In-First-Out (LIFO). Em JavaScript, o array possui o método associado pop().

let arrayPilha = [3, 7, 9, 1, 0];
arrayPilha.pop();
console.log(arrayPilha);

// Assim sendo, as remoções ocorrerão conforme demonstrado abaixo:

// [3, 7, 9, 1, 0]
// [3, 7, 9, 1]
// [3, 7, 9]
// [3, 7]
// [3]
// []
// */
