/* ------------ POO: ATIVIDADE 08 ------------ 

-=-=-=-=-=-=-=-=- 1º Questão -=-=-=-=-=-=-=-=- */

class Veiculo {

    constructor(private placa: string, private ano: number) {
        this.placa = placa
        this.ano = ano
    }
    
    get getPlaca(): string {
        return this.placa
    }
    get getAno(): number {
        return this.ano
    }
}

class Carro extends Veiculo {
    
    constructor(placa: string, ano: number, private modelo: string) {
        super(placa, ano)
        this.modelo = modelo
    }

    get getModelo(): string {
        return this.modelo
    }
}

class CarroEletrico extends Carro  {

    constructor(placa: string, ano: number,modelo: string, private autonomiaBateria: number) {
        super(placa, ano, modelo)
        this.autonomiaBateria = autonomiaBateria
    }
}

// -=-=-=-=-=-=-=-=- 2º Questão -=-=-=-=-=-=-=-=- 

class Calculadora {
    
    constructor(private _op1: any, private _op2: any) {
        this._op1 = _op1
        this._op2 = _op2
    }

    adicionar(): number {
        let soma: number

        soma = this._op1 + this._op2

        return soma
    }
}

let calculo = new Calculadora(1, 1)

console.log(calculo.adicionar())

// -=-=-=-=-=-=-=-=- 3º Questão -=-=-=-=-=-=-=-=- 

class Calculadora3 {

    constructor(private _op1: any, private _op2: any) {
        this._op1 = _op1
        this._op2 = _op2
    }

    adicionar(): number {
        let soma: number

        soma = this._op1 + this._op2

        return soma
    }

    get getOp1(): any {
        return this._op1
    }

    get getOp2(): any {
        return this._op2
    }
}

class CalculadoraCientifica extends Calculadora3{
    
    exponenciar(): number {
        
        let resultado: number

        resultado = Math.pow(this.getOp1, this.getOp2)

        return resultado
    }
}

let calc = new CalculadoraCientifica(2,2)

console.log(calc.exponenciar())


// c) Foi necessario fazer uso do 'get' para acessar os atributos privados fora da classe 'Calculadora'.

// -=-=-=-=-=-=-=-=- 4º Questão -=-=-=-=-=-=-=-=- 

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

class Poupanca extends Conta{

    constructor(numero: string, saldo: number, private taxaJuros: number) {
        super(numero, saldo)
        this.taxaJuros = taxaJuros
    }

    renderJuros(): any{
        this.depositar(this.getSaldo * this.taxaJuros/100)  
    }
    
    get getTaxaJuros(): number {
        return this.taxaJuros
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

    renderJuros(): void{
        for(let conta of this.contas){
            if(conta instanceof Poupanca){
                conta.renderJuros()
            }
        }
    }
}

let conta = new Banco()

conta.inserir(new Conta("123", 10000))
console.log(conta.consultar("123"))
conta.inserir(new Poupanca("987", 5000, 2))
console.log(conta.consultar("987"))
conta.renderJuros()
console.log(conta.consultar("987"))

// -=-=-=-=-=-=-=-=- 5º Questão -=-=-=-=-=-=-=-=- 

class Produto {

    constructor(private id: string,private descricao: string,private quantidade: number, private preco: number) {
        this.id = id
        this.descricao = descricao
        this.quantidade = quantidade
        this.preco = preco
    }

    repor(adiconar: number): any{

        this.quantidade = this.quantidade + adiconar
    }

    darBaixa(remover: number): any{

        this.quantidade = this.quantidade - remover
    }

    get getID(){
            
        return this.id
    }
    get getDescricao(){
                
        return this.descricao
    }

    get getQuantidade(){
                
        return this.quantidade
    }
    get getValor(){
                
        return this.preco
    }
}

class ProdutoPerecivel extends Produto {

    constructor(id: string, descricao: string, quantidade: number, preco: number,private dataValidade: Date) {
        super(id, descricao, quantidade, preco)
        this.dataValidade = dataValidade
    }

    get getDataValidade(){
                    
        return this.dataValidade
    }

    verificaValidade(): any{

        let dataAtual: Date = new Date()

        if(this.dataValidade < dataAtual){

            return true
        }
        else{

            return false	
        }
    }

}

class Estoque {
    
    private produtos: Produto[] = []

    adicionarProduto(produto: Produto): any{

        this.produtos.push(produto)

        return `O produto ${produto.getDescricao} foi adicionado ao estoque.`
    }

    consultarProduto(id: string): any{

        for(let i = 0; i < this.produtos.length; i++){

            if(this.produtos[i].getID == id){

                return this.produtos[i]
            }
        }
    }
    
    removerProduto(id: string): any{	

        for(let i = 0; i < this.produtos.length; i++){

            if(this.produtos[i].getID == id){

                this.produtos.splice(i, 1)

                return `O produto ${id} foi removido do estoque.`
            }
        }
    }

    reporProduto(id: string, adiconar: number): any{

        for(let i = 0; i < this.produtos.length; i++){

            if(this.produtos[i].getID == id){

                this.produtos[i].repor(adiconar)

                return `O produto foi reposto no estoque.`
            }
        }
    }

    darBaixaProduto(id: string, remover: number): any{
            
        for(let i = 0; i < this.produtos.length; i++){

            if(this.produtos[i].getID == id){

                this.produtos[i].darBaixa(remover)

                return `O produto foi reduzido do estoque.`
            }
        }
    }
}

let loja = new Estoque()

console.log(loja.adicionarProduto(new Produto("123", "Caderno", 20, 7.50)))
console.log(loja.adicionarProduto(new Produto("456", "Lápis", 50, 1)))
console.log(loja.adicionarProduto(new ProdutoPerecivel("789", "Goiaba", 10, 2, new Date(2020, 10, 10))))

console.log(loja.consultarProduto("123"))
console.log(loja.consultarProduto("456"))
console.log(loja.consultarProduto("789"))

console.log(loja.removerProduto("123"))

console.log(loja.reporProduto("789", 10))
console.log(loja.consultarProduto("789"))

console.log(loja.darBaixaProduto("456", 30))
console.log(loja.consultarProduto("456"))