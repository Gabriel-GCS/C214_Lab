class Veiculo {
    placa;
    ano;
    
    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    SetPlaca(valor){
        this.placa = valor;
    }

    getPlaca(){
        return this.placa;
    }

    SetAno(valor){
        this.ano = valor;
    }

    getAno(){
        return this.ano;
    }

   
    ixibirDados(){
        console.log(`placa: ${this.placa}, ano: ${this.ano}`)
    }
}

class Caminhao extends Veiculo{
    eixos;

    constructor(placa, ano, eixos){
        super(placa, ano);
        this.eixos = eixos;
    }

    SetEixos(valor){
        this.eixos = valor;
    }

    getEixos(){
        return this.eixos;
    }

    ixibirDados(){
        console.log(`placa: ${this.placa}, ano: ${this.ano}, eixos: ${this.eixos}`)
    }
}

class Onibus extends Veiculo{
    assentos;

    constructor(placa, ano, assentos){
        super(placa, ano);
        this.assentos = assentos;
    }

    SetAssentos(valor){
        this.assentos = valor;
    }

    getAssentos(){
        return this.assentos;
    }

    ixibirDados(){
        console.log(`placa: ${this.placa}, ano: ${this.ano}, assentos: ${this.assentos}`)
    }
}

const Veiculo2 = new Veiculo('DVFD2-1234', 1970);
Veiculo2.ixibirDados();

const Onibus2 = new Onibus('ABC123', 1999, 40);
Onibus2.ixibirDados();

const Caminhao2 = new Caminhao('HDSGK6563', 1990, 4);
Caminhao2.ixibirDados();