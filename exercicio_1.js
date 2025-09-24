 readline = require('readline');
const pergunta = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function ligar_carro(){
    carro = new Carro();
            carro.marca = 'Ford';
            carro.modelo = 'Mustang';
            carro.ano = '2012';
    pergunta.question(('Selecione 1 para ligar o motor ou 0 para desligar o motor: '), (resposta) =>{
        if(resposta == '1'){
            this.motor = true;
            console.log(`Carro: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}`)
            console.log(`Status motor: ${this.motor}`);
        } else{
            this.motor = false;
            console.log(`Carro: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}`)
            console.log(`Status motor: ${this.motor}`);
        }
    });
}
class Carro {
    constructor(){
        this.marca = null;
        this.modelo = null;
        this.ano = null;
        this.motor = null;
    }
    ligar_motor(){
        this.motor = true;
        console.log(`O motor do veículo ${this.modelo} | Motor: ${this.motor}`);
    }
}
ligar_carro();