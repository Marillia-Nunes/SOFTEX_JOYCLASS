class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senhaDeSeguranca";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido.");
        } else {
            console.log("Acesso negado.");
        }
    }
}

// Demonstração de uso
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Tentativa de acesso à Base Secreta
sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
sistemaSeguranca.acessarBaseSecreta("senhaDeSeguranca"); // Acesso concedido