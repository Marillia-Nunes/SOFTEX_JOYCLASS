// Classe abstrata - Veículo
abstract class Veiculo {
    constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number) {}

    abstract clone(): Veiculo;

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`;
    }
}

// Subclasse - Carro
class Carro extends Veiculo {
    constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number, public numeroPortas: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone() {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }

    represent() {
        return `${super.represent()}, Portas: ${this.numeroPortas}`;
    }
}

// Subclasse - Moto
class Moto extends Veiculo {
    constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number, public cilindradas: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone() {
        return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }

    represent() {
        return `${super.represent()}, Cilindradas: ${this.cilindradas}`;
    }
}

// Subclasse - Biscicleta
class Biscicleta extends Veiculo {
    constructor(public modelo: string, public marca: string, public cor: string, public numeroRodas: number, public aro: number) {
        super(modelo, marca, cor, numeroRodas);
    }

    clone() {
        return new Biscicleta(this.modelo, this.marca, this.cor, this.numeroRodas, this.aro);
    }

    represent() {
        return `${super.represent()}, Aro: ${this.aro}`;
    }
}


// Classe Aplicação
class Aplicacao {
    static criarArrayDeVeiculos() {
        const veiculos: Veiculo[] = [];
        veiculos.push(new Carro("HB20", "Hyundai", "Prata", 4, 4));
        veiculos.push(new Moto("Touring", "Honda", "Preta", 2, 1800));
        veiculos.push(new Biscicleta("Esportiva", "Caloi", "Prata", 2, 29));       
                return veiculos;
    }
}

// Exemplo
const veiculos = Aplicacao.criarArrayDeVeiculos();
veiculos.forEach(veiculo => console.log(veiculo.represent()));
