const readlineSync =  require('readline-sync');

// Interface Strategy
class OperacaoStrategy {
    execute(num1, num2) {}
  }
  
  // Classes concretas que implementam a Strategy
  class AdicaoStrategy extends OperacaoStrategy {
    execute(num1, num2) {
      return num1 + num2;
    }
  }
  
  class SubtracaoStrategy extends OperacaoStrategy {
    execute(num1, num2) {
      return num1 - num2;
    }
  }
  
  class MultiplicacaoStrategy extends OperacaoStrategy {
    execute(num1, num2) {
      return num1 * num2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculadora {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calcular(num1, num2) {
      return this.strategy.execute(num1, num2);
    }
  }
  
  // Exemplo de uso
  const num1 = parseInt(readlineSync.question("Primeiro número: "));
  const num2 = parseInt(readlineSync.question("Segundo número: "));
  const operation = readlineSync.question("Operação (+, -, *): ");
  
  let strategy;
  
  switch (operation) {
    case '+':
      strategy = new AdicaoStrategy();
      break;
    case '-':
      strategy = new SubtracaoStrategy();
      break;
    case '*':
      strategy = new MultiplicacaoStrategy();
      break;
    default:
      console.log("Operação inválida");
      break;
  }
  
  if (strategy) {
    const calculadora = new Calculadora(strategy);
    const result = calculadora.calcular(num1, num2);
    console.log(`Resultado: ${result}`);
  }