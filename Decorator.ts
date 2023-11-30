// Interface Component
interface Sanduiche {
    getDescription(): string;
    getCost(): number;
}

// Concrete Component
class SanduicheDeFrangoAssado implements Sanduiche {
    getDescription() {
        return "Sanduíche de Frango Assado";
    }

    getCost() {
        return 4.50;
    }
}

// Concrete Decorator
class IngredientDecorator implements Sanduiche {
    private sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    getDescription() {
        return this.sanduiche.getDescription();
    }

    getCost() {
        return this.sanduiche.getCost();
    }
}

// Concrete Decorator
class Pepperoni extends IngredientDecorator {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
    }

    getDescription() {
        return super.getDescription() + " com Pepperoni";
    }

    getCost() {
        return super.getCost() + 0.99;
    }
}

// Concrete Decorator
class QueijoMussarelaRalado extends IngredientDecorator {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
    }

    getDescription() {
        return super.getDescription() + " e Queijo Mussarela Ralado";
    }

    getCost() {
        return super.getCost() + 2.00;
    }
}

// Cria e imprime o sanduíche
const sanduiche: Sanduiche = new SanduicheDeFrangoAssado();
const sanduicheComPepperoniEQueijo: Sanduiche = new QueijoMussarelaRalado(new Pepperoni(sanduiche));

console.log(sanduicheComPepperoniEQueijo.getDescription() + " - Valor $ " + sanduicheComPepperoniEQueijo.getCost());

// Saída: Sanduíche de Frango Assado com Pepperoni e Queijo Mussarela Ralado - Valor $ 7.49