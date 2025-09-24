readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
class Produto{
    constructor(){
        this.nome = null;
        this.preco = null;
        this.consumo_energia = null;
        this.comunicacao = null;
        this.temperatura = null;
        
    }
    info(){
        console.log(`Produto: ${this.nome}, Preço: ${this.preco}, Consumo de Energia (KW/h): ${this.consumo_energia}, Comunicaçao: ${this.comunicacao}, Temperatura: ${this.temperatura}`);
    }
}
class fritadeira extends Produto{
    constructor(){
        super();
    }
    liga_furitadeira(){
        console.log(`A fritadeira ${this.nome} está ligada!`);
    }
     desliga_fritadeira(){
        console.log(`A fritadeira ${this.nome} está desligada!`);
    }
     liga_fritadeira(){
        console.log(`A furadeira ${this.nome} está ligada!`);
    }
    define_temperatura(){
        rl.question(('Defina a temperatura desejada: '), (define_temperatura) =>{
            this.temperatura = define_temperatura;
            console.log(`A temperatura do ${this.nome} é de ${define_rotacao} rpm`);
            this.info();
            rl.close();
        })
    }
}
teste = new furadiera();
teste.nome = 'Bosch Skill';
teste.eixo = '1';
teste.rotacao = '100 rpm';
teste.consumo_energia = '3 W';
teste.info();
teste.define_rotacao();