// Interface comum 
interface Computador {
    getRAM(): number;
    getHDD(): number;
    getCPU(): number;
    getType(): string;
    toString(): string;
}

// Classe concreta - PC
class PC implements Computador {
    constructor(private ram: number, private hdd: number, private cpu: number) {}

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return "PC";
    }

    toString() {
        return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
    }
}

// Classe concreta - Servidor
class Server implements Computador {
    constructor(private ram: number, private hdd: number, private cpu: number) {}

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return "Server";
    }

    toString() {
        return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
    }
}

// Fábrica decide tipo de computador que irá instanciar
class ComputerFactory {
    static createComputador(type: string, ram: number, hdd: number, cpu: number): Computador {
        if (type.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        } else if (type.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error("Computador desconhecido");
        }
    }
}

// Exemplo 
const pc = ComputerFactory.createComputador("PC", 8, 512, 1.0);
const server = ComputerFactory.createComputador("Server", 64, 1024, 5.1);

console.log(pc.toString());      // Saída: Type: PC, RAM: 8GB, HDD: 512GB, CPU: 1.0GHz
console.log(server.toString());  // Saída: Type: Server, RAM: 64GB, HDD: 1024GB, CPU: 5.1GHz
