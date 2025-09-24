class Automovel{
    constructor(){
        this.cor_carro = null;
        this.modelo = null;
        this.combustivel = null;
        this.qtd_rodas = null;
    }
    info_carro(){
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor_carro}, Combustível: ${this.combustivel}, Nº rodas: ${this.qtd_rodas}`);
    }
    ligar_carro(){
        console.log(`O ${this.modelo} está ligado!`)
    }
    desligar_carro(){
        console.log(`O ${this.modelo} está desligado!`)
    }
    abrir_vidro(){
        console.log(`O ${this.modelo} está com os vidros abertos!`)
    }
    fechar_vidro(){
        console.log(`O ${this.modelo} está com os vidros fechados!`)
    }
}
class Carro extends Automovel{
    constructor(){
        super();

    }
}
class Moto extends Automovel{
    constructor(){
        super();
        
    }
}
class Caminhao extends Automovel{
    constructor(){
        super();
        
    }
}
Carro_1 = new Carro();
Carro_1.modelo = 'Ônix 1.0';
Carro_1.cor_carro = 'Prata';
Carro_1.combustivel = 'Gasolina';
Carro_1.qtd_rodas = '4';
Carro_1.info_carro();
Carro_1.ligar_carro();
Carro_1.desligar_carro();
Carro_1.abrir_vidro();
Carro_1.fechar_vidro();
console.log('----------------------------')
//---------------------
Moto_1 = new Moto();
Moto_1.modelo = 'Honda';
Moto_1.cor_carro = 'Preta';
Moto_1.combustivel = 'Gasolina';
Moto_1.qtd_rodas = '2';
Moto_1.info_carro();
Moto_1.ligar_carro();
Moto_1.desligar_carro();
Moto_1.abrir_vidro();
Moto_1.fechar_vidro();
console.log('----------------------------')
//---------------------
Caminhao_1 = new Caminhao();
Caminhao_1.modelo = 'Mercedes-Benz';
Caminhao_1.cor_carro = 'Vermelho/Branco';
Caminhao_1.combustivel = 'Álcool';
Caminhao_1.qtd_rodas = '8';
Caminhao_1.info_carro();
Caminhao_1.ligar_carro();
Caminhao_1.desligar_carro();
Caminhao_1.abrir_vidro();
Caminhao_1.fechar_vidro();
console.log('----------------------------')
//---------------------
Caminhao_1 = new Caminhao();
Caminhao_1.modelo = 'Ford';
Caminhao_1.cor_carro = 'Branco';
Caminhao_1.combustivel = 'Gasolina';
Caminhao_1.qtd_rodas = '8';
Caminhao_1.info_carro();
Caminhao_1.ligar_carro();
Caminhao_1.desligar_carro();
Caminhao_1.abrir_vidro();
Caminhao_1.fechar_vidro();