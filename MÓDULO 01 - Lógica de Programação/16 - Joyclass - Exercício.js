// Desenvolva um código que simule uma eleição com três candidatos.

// - candidato_X => 889
// - candidato_Y => 847
// - candidato_Z => 515
// - branco => 0

// O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.
// Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

// Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

// RESPOSTA:

let Candidato_X = 0; 
let Candidato_Y = 0;
let Candidato_Z = 0;
let Branco = 0;
let Voto = 0; 
let Continuar;
let Eleito;

function totalVotos() {
    return Candidato_X + Candidato_Y + Candidato_Z + Branco;
}

console.log(' ' );
console.log('VOTAÇÃO INICIADA!');

do {
    Voto = parseInt(require('readline-sync').question('\nDigite seu voto: \n\nCandidato_X => 889 \nCandidato_Y => 847 \nCandidato_Z => 515 \nBranco => 0 \n\n'));
    if (isNaN(Voto) === true) {
        console.log('Apenas números!');
    } else {
        Continuar = require('readline-sync').question('\nContinuar votação? \nQualquer tecla para Sim e "n" para não \n');
    }

    switch (Voto) {
        case 889:
            Candidato_X++;
            break;

        case 847:
            Candidato_Y++;
            break;

        case 515:
            Candidato_Z++;
            break;
        default:
            Branco++;
            break;
    }

} while (Continuar !== 'n');

if (Candidato_X > Candidato_Y && Candidato_X > Candidato_Z) {
    Eleito = 'Candidato X';
} else if (Candidato_Y > Candidato_X && Candidato_Y > Candidato_Z) {
    Eleito = 'Candidato Y';
} else if (Candidato_Z > Candidato_X && Candidato_Z > Candidato_Y) {
    Eleito = 'Candidato Z';
} else if (Candidato_X == Candidato_Y || Candidato_X == Candidato_Z || Candidato_Y == Candidato_Z || Candidato_X == Candidato_Y == Candidato_Z) {
    Eleito = 'Empate';
}
console. clear() 
console.log(`O CANDIDATO ELEITO É "${Eleito}".`);
console.log(`\nTOTAL DE VOTOS: ${totalVotos()} \nCandidato_X: ${Candidato_X} \nCandidato_Y: ${Candidato_Y} \nCandidato_Z: ${Candidato_Z} \nBrancos e Nulos: ${Branco} \n `);


