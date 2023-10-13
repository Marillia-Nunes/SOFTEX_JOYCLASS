class Igreja {
  constructor(denominacao, nome, localidade) {
    this.denominacao = denominacao;
    this.nome = nome;
    this.localidade = localidade;    
  }

  acolher() {
    this.acolhe = true;
    console.log(`A igreja ${this.denominacao}  ${this.nome} do ${this.localidade} tem por missão acolher toda a comunidade.`);
  }

  evangelizar() {
    this.evangeliza = false;
    console.log(`A igreja ${this.denominacao}  ${this.nome} do ${this.localidade} evangeliza pelas ruas da cidade.`);
  }

  orientar() {
    if (this.orienta) {
      console.log(`A igreja ${this.denominacao}  ${this.nome} do ${this.localidade} orienta e acolhe mães carentes.`);
    } else {
      console.log(`A igreja ${this.denominacao}  ${this.nome} do ${this.localidade} não consegue orientar e acolher as mães carentes não localizadas.`);
    }
  }
}

const igreja01 = new Igreja('Católica', 'Nossa Senhora das Graças', 'Engenho do Meio');
igreja01.acolher();
igreja01.evangelizar();
igreja01.orientar();


