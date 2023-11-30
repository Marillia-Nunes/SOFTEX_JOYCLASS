// Classe alvo (Target) - Galinha
class Galinha {
    cacarejar() {
        console.log("Cocoricó!");
    }
}

// Interface Adaptee - Pato
interface Pato {
    grasnar(): void;
    voar(): void;
}

// Adaptador
class AdaptadorPato extends Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        super();
        this.pato = pato;
    }

    cacarejar() {
        this.pato.grasnar();
    }
}

// Demonstração
class AdaptadorPatoDemo {
    static main() {
        const pato: Pato = {
            grasnar() {
                console.log("Quack!");
            },
            voar() {
                console.log("Voando como um pato");
            }
        };
        const adaptadorPato = new AdaptadorPato(pato);

        console.log("Pato:");
        pato.grasnar();
        pato.voar();

        console.log("\nGalinha (usando o adaptador):");
        adaptadorPato.cacarejar();
    }
}

AdaptadorPatoDemo.main();
