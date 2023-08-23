// Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

// Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade.

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

// RESPOSTA:

function animais(animal, nome, especie, idade) {
    this.animal = animal;
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
}

let planilha = [
    new animais ('Gato', 'Tico', 'Felis catus', '3 anos'),
    new animais ('Cachorro', 'Thor', 'Canis familiaris', '4 anos'),
    new animais ('Coelho', 'Lilica', 'Lagomorfos', '6 anos'),
    new animais ('Tartaruga', 'Têca', 'Quelônios', '8 anos')
]

console.table(planilha);