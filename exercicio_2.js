class Pessoa{
    constructor(){
        this.nome = null;
        this.idade = null;
        this.profissao = null;
        this.salario = null;
    }
    exibir_info(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}, Salário: ${this.salario}`)
    }
}
class Funcionario extends Pessoa{
    constructor(){
        super();
        this.empressa = null;
        this.tempo_trabalho = null;
    }
    exibir_trabalho(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}, Salário: ${this.salario}`)
        console.log(`Empresa: ${this.empresa}, tempo de trabalho: ${this.tempo_trabalho}`)
    }
}