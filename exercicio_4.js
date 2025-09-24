const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Cliente {
  constructor(nome, profissao, saldo) {
    this.nome = nome;
    this.profissao = profissao;
    this.saldo = parseFloat(saldo);
  }

  pix(valor) {
    valor = parseFloat(valor);
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`PIX de R$${valor} realizado com sucesso!`);
    } else {
      console.log("Saldo insuficiente para PIX!");
    }
  }

  emprestimo(valor) {
    valor = parseFloat(valor);
    this.saldo += valor;
    console.log(`Empréstimo de R$${valor} concedido!`);
  }

  saque(valor) {
    valor = parseFloat(valor);
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso!`);
    } else {
      console.log("Saldo insuficiente para saque!");
    }
  }

  extrato() {
    console.log(`Extrato do Cliente:`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Profissão: ${this.profissao}`);
    console.log(`Saldo atual: R$${this.saldo}`);
  }
}

function iniciar() {
  rl.question("Digite o nome: ", (nome) => {
    rl.question("Digite a profissão: ", (profissao) => {
      rl.question("Digite o saldo inicial: ", (saldo) => {
        const cliente = new Cliente(nome, profissao, saldo);

        console.log("\nCliente criado com sucesso!");
        cliente.extrato();

        menu(cliente);
      });
    });
  });
}

function menu(cliente) {
  console.log("\n=== MENU BANCO ===");
  console.log("1 - PIX");
  console.log("2 - Empréstimo");
  console.log("3 - Saque");
  console.log("4 - Extrato");
  console.log("5 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Valor do PIX: ", (valor) => {
          cliente.pix(valor);
          menu(cliente);
        });
        break;
      case "2":
        rl.question("Valor do Empréstimo: ", (valor) => {
          cliente.emprestimo(valor);
          menu(cliente);
        });
        break;
      case "3":
        rl.question("Valor do Saque: ", (valor) => {
          cliente.saque(valor);
          menu(cliente);
        });
        break;
      case "4":
        cliente.extrato();
        menu(cliente);
        break;
      case "5":
        console.log("Programa encerrado!");
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        menu(cliente);
    }
  });
}

iniciar();