/* ------------ POO: ATIVIDADE 04 | Parte 2 ------------ 

-=-=-=-=-=-=-=-=- 1º Questão -=-=-=-=-=-=-=-=- 

Assinale verdadeiro ou falso:

    a. (F) Objetos são modelos para classes;
    b. (V) Atributos de uma classe devem ser obrigatoriamente inicializados para
    que as classes compilem;
    c. (V) Uma classe de cadastro é responsável por manter o controle de outras
    classes mais simples, que chamamos de classes básicas;
    d. (F) Uma variável declarada dentro de um método deve ser inicializada para
    que a classe seja compilável;
    e. (F) Uma variável que seja uma classe declarada em um método é
    automaticamente inicializada com null;
    f. (V) Construtores são rotinas especiais que servem para inicializar e
    configurar os objetos no momento da instanciação;
    g. (V) Construtores não possuem tipo de retorno e podem ou não ter
    parâmetros;
    h. (V) Uma classe pode ter várias instâncias;

-=-=-=-=-=-=-=-=- 2º Questão -=-=-=-=-=-=-=-=- */

class Triangle {
    
    lado1: number
    lado2: number
    lado3: number

    constructor(lado1: number, lado2: number, lado3: number){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    ehRetangulo(): any{

        if (this.lado2 - this.lado3 < this.lado1 && this.lado1 < this.lado2 + this.lado3){
            return true
        }
        else{
            return false
        }
    }

    ehIsoceles(): any{

        if(this.ehRetangulo() == false){
            return false && "Não é possivel formar um triangulo."}

        else{
        
            if (this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3){

                return true && "É possivel formar um triangulo isóceles."
            }
            else{
                return "Não é possivel formar um triangulo isósceles."
            }
        }
    }
    
    ehEquilatero(): any{
        
        if(this.ehRetangulo() == false){
            return false
        }
        else{
            if (this.lado1 == this.lado2 && this.lado1 == this.lado3){
                return true && "É possivel formar um triangulo equilatero."
            }
            else{
                return "Não é possivel formar um triangulo equilatero."
            }
        }
    }

    ehEscaleno(): any{

        if(this.ehRetangulo() == false){
            return false && "Não é possivel formar um triangulo."}

        else{
            if (this.lado1 != this.lado2 && this.lado1 != this.lado3 && this.lado2 != this.lado3){
                return true && "É possivel formar um triangulo escaleno."
            }
            else{
                return "Não é possivel formar um triangulo escaleno."
            }
        }
    }
}

let verificaTriagulo = new Triangle(10,6,5)

console.log(verificaTriagulo.ehIsoceles())
console.log(verificaTriagulo.ehEquilatero())
console.log(verificaTriagulo.ehEscaleno())

// -=-=-=-=-=-=-=-=- 3º Questão -=-=-=-=-=-=-=-=- 

class Conta {
	numero: string
	saldo: number

	constructor(numero: string, saldoInicial: number) {
		this.numero = numero
		this.saldo = saldoInicial
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

}

class Banco {
	contas: Conta[] = [];
	
	inserir(conta: Conta) {

		let idConta: string = conta.numero
		let confirmação: boolean

		if(this.contas.length == 0){

			this.contas.push(conta)

			return true
		}
		else{
			for(let i : number = 0; i < this.contas.length ; i++){

                if(idConta == this.contas[i].numero){

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
	
	sacar(numero: String, valor: number): void {

		let contaConsultada = this.consultar(numero)

		if (contaConsultada != null) {
			contaConsultada.sacar(valor)
		}
	}

	transferir(numeroDebito: String, numeroCredito: String, valor: number): void {

		let contaOrigem = this.consultar(numeroDebito)
		let contaDestino = this.consultar(numeroCredito)

		if (contaOrigem != null && contaDestino != null) {
			contaOrigem.transferir(contaDestino, valor)
		}
	}

	consultar(numero: String): Conta {

		let contaConsultada: Conta

		for (let conta of this.contas) {

			if (conta.numero == numero) {
				contaConsultada = conta
				break;
			}
		}

		return contaConsultada;
	}

	consultarPorIndice(numero: String): number {

		let indice: number = -1

		for (let i: number = 0; i < this.contas.length; i++) {

			if (this.contas[i].numero == numero) {
				indice = i;
				break
			}
		}

		return indice
	}

	alterar(conta: Conta): void {

		let indice: number = this.consultarPorIndice(conta.numero)

		if (indice != -1) {
			this.contas[indice] = conta
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero)
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1]
			}

			this.contas.pop()
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero)

		if (contaConsultada != null) {
			contaConsultada.depositar(valor)
		}
	}

	totalContas(): any {
		let contas = this.contas.length

		return `Existem ${contas} contas.`
	}

	totalDinheiro(): any {

		let moneyTotal = 0

		for (let conta of this.contas) {
			moneyTotal += conta.saldo
		}

		return `O total de dinheiro das contas é: R$ ${moneyTotal}`
	}

	mediaSaldos(): any {

		let mediaContas = 0

		for (let conta of this.contas) {
			mediaContas += conta.saldo
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

console.log(contas.totalContas())
console.log(contas.totalDinheiro())
console.log(contas.mediaSaldos())

// -=-=-=-=-=-=-=-=- 4º Questão -=-=-=-=-=-=-=-=- 

class Postagem {

    id: number
    texto: string
    quantCurtidas: number

    constructor(id: number, texto: string, quantCurtidas: number){
        this.id = id
        this.texto = texto
        this.quantCurtidas = quantCurtidas
    }

    curtir(): void{

        this.quantCurtidas++
    }
    
    toString(): any{

        return `Postagem: ${this.texto} -=- ${this.quantCurtidas} curtidas`
    }
}

class MicroBlog{
            
    postagens: Postagem[] = []

    publicar(postar: Postagem): void{
        this.postagens.push(postar)
    }

    excluirPublicação(id: number): void{

        for (let i: number = 0; i < this.postagens.length; i++) {

            if (this.postagens[i].id == id) {
                this.postagens.splice(i,1)
            }
        }
    }
    

    maisCurtida(): Postagem{

        let postagemMaisCurtida: Postagem = this.postagens[0]

        for (let i: number = 0; i < this.postagens.length; i++) {

            if (this.postagens[i].quantCurtidas > postagemMaisCurtida.quantCurtidas) {

                postagemMaisCurtida = this.postagens[i]
            }
        }

        return postagemMaisCurtida
    }

    curtir(id: number): void{
        for (let i: number = 0; i < this.postagens.length; i++) {

            if (this.postagens[i].id == id) {
                this.postagens[i].curtir()
            }
        }
    }

    toString(): any{
        let texto: string = ""

        for (let i: number = 0; i < this.postagens.length; i++) {

            texto += this.postagens[i].toString() + "\n"
        }

        return texto
    }
}

let postar1 = new Postagem(1, "Olá Mundo", 0)
let postar2 = new Postagem(2, "Hello World", 1)

console.log(postar1.toString())
postar1.curtir()
console.log(postar1.toString())

let blog = new MicroBlog()

blog.publicar(postar1)
blog.publicar(postar2)
blog.curtir(2)
console.log(blog.maisCurtida())
console.log(blog.toString())
