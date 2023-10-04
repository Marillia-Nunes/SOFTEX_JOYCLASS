// Crie uma lista encadeada em que cada elemento representa uma pessoa.

// Ela precisa conter informações como nome, idade e referência ao filho dela.

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

// RESPOSTA:

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filho = null;
    }
}

let cabeca = null;
let p1 = new Pessoa("José", 80);
let p2 = new Pessoa("Mari", 60);
let p3 = new Pessoa("Anna", 40);
let p4 = new Pessoa("Beto", 20);


p1.filho = p2;
p2.filho = p3;
p3.filho = p4;

cabeca = p1;

let atual = cabeca;
while (atual != null) {
    console.group(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
    atual = atual.filho;
}
