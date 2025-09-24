readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
class Maquinas{
    constructor(){
        this.nome = null;
        this.eixo = null;
        this.rotacao = null;
        this.consumo_energia = null;
    }
    info(){
        console.log(`Máquina: ${this.nome}, Rotação: ${this.rotacao}, Consumo de Energia (KW/h): ${this.consumo_energia}, Eixos: ${this.eixo}`);
    }
}
class furadeira extends Maquinas{
    constructor(){
        super();
    }
    liga_furadeira(){
        console.log(`A furadeira ${this.nome} está ligada!`);
    }
     desliga_furadeira(){
        console.log(`A furadeira ${this.nome} está desligada!`);
    }
     liga_furadeira(){
        console.log(`A furadeira ${this.nome} está ligada!`);
    }
    define_rotacao(){
        rl.question(('Defina a rotação desejada: '), (define_rotacao) =>{
            this.rotacao = define_rotacao;
            console.log(`A rotação da furadeira ${this.nome} é de ${define_rotacao} rpm`);
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