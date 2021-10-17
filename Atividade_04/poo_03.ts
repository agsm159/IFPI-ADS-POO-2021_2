/* ------------ POO: ATIVIDADE 03 ------------ 

 -=-=-=-=-=-=-=-=- 1º Questão -=-=-=-=-=-=-=-=-

R: O programa não irá compilar, para que isso seja possivel deve-se ser 
   adicionado "this.quantReservas++" ao metodo "adicionarReserva" da classe
   "Hotel", embora que mesmo compilando, o resultado retornado não fara as
   adições no "quantReserva" e sera retornado o valor "undefined". 

 -=-=-=-=-=-=-=-=- 2º Questão -=-=-=-=-=-=-=-=- */

class Hotel { 
    quantReservas : number; 

    constructor(qR: number) {
        this.quantReservas = qR
    }
    adicionarReserva() : void { 
        this.quantReservas++; 
    }
} 

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);

/* 
 -=-=-=-=-=-=-=-=- 3º Questão -=-=-=-=-=-=-=-=- 

R: O programa não irá compilar, pois durante a instanciação
   do "let r : Radio = new Radio();" não foi atribuido um valor
   do tipo number ao construtor da classe. Como forma de corrigir 
   esse problema, deve-se adicionar um valor number ao construtor
   como "let r : Radio = new Radio(5);"

 -=-=-=-=-=-=-=-=- 4º Questão -=-=-=-=-=-=-=-=- 

R: a) O resultado de ambos os prints será "90", no caso da c1 sera 
      sacado "10" dos "100" que possuia, restando "90" e em c2 sera
      feita uma transferencia de "50" para c1, porém os objetos c1 e c2
      são tratados como se fossem um mesmo objeto, ou seja, ao realizar
      a transferencia, ambos os objetos terão o mesmo valor de "saldo"

   b) O objeto que era referenciado por c1 será destruido, para que c2
      seja referenciado no lugar do antigo valor, que por sua vez sera
      o valor referenciado por c2. 


 -=-=-=-=-=-=-=-=- 5º Questão -=-=-=-=-=-=-=-=- */

class Jogador {

    forca : number
    nivel : number
    pontosAtuais: number

    constructor(f: number, n: number, pA: number) {
        this.forca = f
        this.nivel = n
        this.pontosAtuais = pA
    }
    
    danoAtaque() {
        let dano:number = this.forca * this.nivel

        return dano
    }

    atacar(jogador: Jogador) {
        let dano:number = this.danoAtaque()

        jogador.pontosAtuais -= dano
    }
}

let jogador1 : Jogador = new Jogador(55, 10, 1000)
let jogador2 : Jogador = new Jogador(63, 8, 1000)

console.log('Pontos jogador 1: ', jogador1.pontosAtuais)
console.log('Pontos jogador 2: ', jogador2.pontosAtuais)
jogador2.atacar(jogador1)
console.log('Pontos jogador 1: ',jogador1.pontosAtuais)
jogador1.atacar(jogador2)
console.log('Pontos jogador 2: ',jogador2.pontosAtuais)

/* -=-=-=-=-=-=-=-=- 6º Questão -=-=-=-=-=-=-=-=- */

class Conta {

    numero: String;
    saldo: number;

    constructor(num:String,saldoInicial:number){
        this.numero = num;
        this.saldo = saldoInicial;
    }

    sacar(valor: number): any {
        let resto: number = this.saldo - valor

        if(resto < 0){
            return false;
        }
        else{
            this.saldo = resto

            return true
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        let transf: boolean = this.sacar(valor)

        if(transf == true){
            contaDestino.depositar(valor);
        }
    }
}

let conta1 : Conta = new Conta('12345-6', 1000)
let conta2 : Conta = new Conta('54321-2', 500)

console.log(conta1.sacar(1050))
conta1.depositar(100)
console.log(conta1.sacar(1050))
console.log(conta1.consultarSaldo())
console.log(conta2.consultarSaldo())
conta2.transferir(conta1, 600)
console.log(conta1.consultarSaldo())
conta2.transferir(conta1, 200)
console.log(conta1.consultarSaldo())

/* -=-=-=-=-=-=-=-=- 7º Questão -=-=-=-=-=-=-=-=- */

class Produto {

    codigo: number
    descricao: string
    valor: number
    quantidadeAtual: number
    quantidadeMinima: number

    constructor(codigo: number, descricao: string, valor: number, quantidadeMinima: number,quantidadeAtual: number) {
        this.codigo = codigo
        this.descricao = descricao
        this.valor = valor
        this.quantidadeAtual = quantidadeAtual
        this.quantidadeMinima = quantidadeMinima
    }

    baixar(quantidade: number) {
        let atual:number = this.quantidadeAtual - quantidade

        if(atual < this.quantidadeMinima){
            
            return false
        }
        else{
            this.quantidadeAtual = atual

            return true
        }
    }
    
    repor(quantidade: number) {
        let atual:number = this.quantidadeAtual + quantidade

        this.quantidadeAtual = atual
    }
    
    reajusta(taxa:number){
        let novoValor:number = this.valor * (taxa/100)

        this.valor = novoValor  
    }

    toString(): string {
        return `${this.codigo} - ${this.descricao} - R$ ${this.valor} - ${this.quantidadeAtual} unidades`
    }

    equals(produto: Produto): boolean {

        if(this.codigo == produto.codigo){
            return true
        }
        else{
            return false
        }
    }
}

let produto1 : Produto = new Produto(1, 'livro', 150, 20, 5)
let produto2 : Produto = new Produto(2, 'Caneta', 5, 50, 10)
let produto3 : Produto = new Produto(1, 'Caderno', 20, 23, 5)

console.log(produto1.toString())
produto1.baixar(10)
console.log(produto1.toString())
produto1.baixar(25)
console.log(produto1.toString())
produto1.repor(15)
console.log(produto1.toString())
produto1.reajusta(80)
console.log(produto1.toString())
console.log(produto1.equals(produto2))
console.log(produto1.equals(produto3))
