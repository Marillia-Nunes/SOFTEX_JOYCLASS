function Banco(cliente, agencia, conta, tipoConta, deposito, dataDeposito, saque, dataSaque, saldo){

    this.cliente = cliente
    this.agencia = agencia;
    this.conta = conta;
    this.tipoConta = tipoConta;
    this.deposito = deposito;
    this.dataDeposito = dataDeposito
    this.saque = saque;
    this.dataSaque = dataSaque
    this.saldo = saldo;

    this.exibirConta = function () {
        return console.log(`\n******************************** \n\n Cliente: ${this.cliente} \n Nº da Agência: ${this.agencia} \n Nº da Conta: ${this.conta} \n Tipo da Conta: ${this.tipoConta} \n\n-------------------------------- \n`);
    }

    this.exibirDeposito = function () {
        return console.log(` Valor do Depósito: ${(this.deposito).toFixed(2)} \n Data do Depósito: ${this.dataDeposito} \n\n--------------------------------
        `);
    }

    this.exibirSaque = function () {
        return console.log(` Valor do Saque: ${(this.saque).toFixed(2)} \n Data do Saque: ${this.dataSaque} \n\n--------------------------------`);
    }

    this.exibirSaldo = function () {
        this.saldo = (this.deposito) - (this.saque);
        return console.log(`\n SALDO ATUAL: ${(this.saldo).toFixed(2)} \n\n******************************** \n`);
    }

}

let banco = new Banco();
banco.cliente = "MARIA JOSÉ DA SILVA"
banco.agencia = "9999-9";
banco.conta = "99999-9";
banco.tipoConta = "Conta Corrente"
banco.deposito = 1000;
banco.dataDeposito = "12/10/2023";
banco.saque = 150;
banco.dataSaque = "13/10/2023"
banco.exibirConta();
banco.exibirDeposito();
banco.exibirSaque();
banco.exibirSaldo();