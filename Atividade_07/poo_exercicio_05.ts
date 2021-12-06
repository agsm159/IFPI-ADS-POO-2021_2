/* ------------ POO: ATIVIDADE 07 ------------ 

-=-=-=-=-=-=-=-=- 1º Questão -=-=-=-=-=-=-=-=- */

class Calculadora {

    private operando1: number
    private operando2: number

    constructor(operando1: number,  operando2: number) {

        this.operando1 = operando1
        this.operando2 = operando2
     }

    public somar(): any {

        let soma: number

        soma = this.operando1 + this.operando2;

        return `O resultado da soma é: ${soma}`
    }

    public subtrair(): any {

        let subtrai: number

        subtrai = this.operando1 - this.operando2;

        return `O resultado da subtração é: ${subtrai}`
    }

    public multiplicar(): any {

        let multiplica: number

        multiplica = this.operando1 * this.operando2;

        return `O resultado da multiplicação é: ${multiplica}`
    }

    public dividir(): any {

        let divisao: number
        
        divisao = this.operando1 / this.operando2;

        return `O resultada da divisão é: ${divisao}`
    }
}

let calc: Calculadora = new Calculadora(100, 20)

console.log(calc.somar())
console.log(calc.subtrair())
console.log(calc.multiplicar())
console.log(calc.dividir())

// -=-=-=-=-=-=-=-=- 2º Questão -=-=-=-=-=-=-=-=-

class Hora {

    private hora: number
    private minuto: number
    private segundo: number

    constructor(hora: number, minuto: number, segundo: number) {

        this.hora = hora
        this.minuto = minuto
        this.segundo = segundo
    }

    public lerHora(): any {

        return `O horario descrito possui: ${this.hora} horas`
    }

    public lerMinuto(): any {
            
        return `O horario descrito possui: ${this.minuto} minutos`
    }

    public lerSegundos(): any {

        return `O horario descrito possui: ${this.segundo} segundos`
    }

    public verHoras(): any {

        return `O horario é: ${this.hora}:${this.minuto}:${this.segundo}`
    }
}

let queHorasSao: Hora = new Hora(17, 53, 45)

console.log(queHorasSao.lerHora())
console.log(queHorasSao.lerMinuto())
console.log(queHorasSao.lerSegundos())
console.log(queHorasSao.verHoras())

// -=-=-=-=-=-=-=-=- 3º e 4º Questão -=-=-=-=-=-=-=-=-

class Conta {

	constructor(private numero: string,  private saldo: number) {

		this.numero = numero
		this.saldo = saldo
	}

	sacar(valor: number): void {
		this.saldo = this.saldo - valor
	}

	depositar(valor: number): void {
		this.saldo = this.saldo + valor
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor)
		contaDestino.depositar(valor)
	}

	get getNumero(): string {

		return this.numero;
	}

	get getSaldo(): number {

		return this.saldo;
	}

}

class Banco {
	
	private contas: Conta[] = [];
	
	public inserir(conta: Conta) {

		let idConta: string = conta.getNumero
		let confirmação: boolean

		if(this.contas.length == 0){

			this.contas.push(conta)

			return true
		}
		else{
			for(let i : number = 0; i < this.contas.length ; i++){

                if(idConta == this.contas[i].getNumero){

                    confirmação = true

                    return "Já exite uma conta corespondente a este numero"
                }
				else{
                    confirmação = false
                }
			}
		}
		if(confirmação == false){

			this.contas.push(conta)
		}
	}
	
	public sacar(numero: String, valor: number): void {

		let contaConsultada = this.consultar(numero)

		if (contaConsultada != null) {
			contaConsultada.sacar(valor)
		}
	}

	public transferir(numeroDebito: String, numeroCredito: String, valor: number): void {

		let contaOrigem = this.consultar(numeroDebito)
		let contaDestino = this.consultar(numeroCredito)

		if (contaOrigem != null && contaDestino != null) {
			contaOrigem.transferir(contaDestino, valor)
		}
	}

	public consultar(numero: String): Conta {

		let contaConsultada: Conta

		for (let conta of this.contas) {

			if (conta.getNumero == numero) {
				contaConsultada = conta
				break;
			}
		}

		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {

		let indice: number = -1

		for (let i: number = 0; i < this.contas.length; i++) {

			if (this.contas[i].getNumero == numero) {
				indice = i;
				break
			}
		}

		return indice
	}

	public alterar(conta: Conta): void {

		let indice: number = this.consultarPorIndice(conta.getNumero)

		if (indice != -1) {
			this.contas[indice] = conta
		}
	}

	public excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero)
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1]
			}

			this.contas.pop()
		} 
	}

	public depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero)

		if (contaConsultada != null) {
			contaConsultada.depositar(valor)
		}
	}

	public totalContas(): any {
		let contas = this.contas.length

		return `Existem ${contas} contas.`
	}

	public totalDinheiro(): any {

		let moneyTotal = 0

		for (let conta of this.contas) {
			moneyTotal += conta.getSaldo
		}

		return `O total de dinheiro das contas é: R$ ${moneyTotal}`
	}

	public mediaSaldos(): any {

		let mediaContas = 0

		for (let conta of this.contas) {
			mediaContas += conta.getSaldo
		}

		mediaContas = mediaContas / this.contas.length

		return `A média dos saldos das contas é: R$ ${mediaContas}`
	}
}


let contas: Banco = new Banco()

contas.inserir(new Conta("123", 5000))
console.log(contas.inserir(new Conta("123", 5000)))
console.log(contas.consultar("123"))

contas.inserir(new Conta("456", 10000))
console.log(contas.inserir(new Conta("456", 10000)))
console.log(contas.consultar("456"))

contas.sacar("123", 1000)
console.log(contas.consultar("123"))

contas.transferir("456", "123", 2500)
console.log(contas.consultar("123"))
console.log(contas.consultar("456"))
