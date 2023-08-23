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
let p3 = new Pessoa("João", 58);
let p4 = new Pessoa("Anna", 40);
let p5 = new Pessoa("Davi", 39);
let p6 = new Pessoa("Rosa", 38);
let p7 = new Pessoa("Tito", 37);
let p8 = new Pessoa("Beto", 20);
let p9 = new Pessoa("Diva", 19);
let p10 = new Pessoa("Zico", 18);
let p11 = new Pessoa("Bele", 17);

p1.filho = p2;
p1.filho = p3;
p2.filho = p4;
p2.filho = p5;
p3.filho = p6;
p3.filho = p7;
p4.filho = p8;
p5.filho = p9;
p6.filho = p10;
p7.filho = p11;

cabeca = p1;

let atual = cabeca;
while (atual != null) {
    console.group(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
    atual = atual.filho;
}
