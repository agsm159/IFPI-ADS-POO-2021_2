/* ------------ POO: ATIVIDADE 01 ------------ 

-=-=-=-=-=-=-=-=- 1º Questão -=-=-=-=-=-=-=-=-

R:  Um objeto seria qualquer tipo de coisa que possua características próprias 
    e que possa realizar alguma ação, como um cachorro que pode possuir nome, 
    idade, raça, assim como fazer uma ação como correr, latir, comer.
    Já as classes seriam um grupo em que esses objetos pertenceriam,
    que possuem características semelhantes, por exemplo que um grupo de cachorros 
    possui nome, idade e raça.

-=-=-=-=-=-=-=-=- 2º Questão -=-=-=-=-=-=-=-=-

R:  Um atributo funciona como uma característica de um objeto e os métodos seriam
    as ações que esse objeto pode realizar. Por exemplo, um objeto gato que possui 
    os atributos nome, idade, peso, cor do pêlo e tamanho capaz de realizar 
    os métodos miar, comer e dormir.


-=-=-=-=-=-=-=-=- 3º Questão -=-=-=-=-=-=-=-=-

Atributo         Sistema em que é    |  Sistema em que
                    importante       |  não é importante
-------------------------------------------------------------
Peso:           Um sistema de uma    |  Um sistema bancario   
                clinica médica       |
-------------------------------------------------------------
Tipo de CNH:    Um sistema de        |  Um sistema de compra
                cadastro de emprego. |  de imóveis
-------------------------------------------------------------
Tipo Sanguíneo: Um sistema de uma    |  O sistema de uma
                clínica médica       |  loja
-------------------------------------------------------------
Habilidade :    Um sistema para      |  Um sistema de compra
destra          cadastro de jogadores|  de ingressos
                de basquete          |
-------------------------------------------------------------
Percentual :    Um sistema de um     |  Um sistema bancário
de gordura      hospital             |  
-------------------------------------------------------------
Saldo em :     Um sistema de         |  Um sistema de adoção
conta          controle financeiro   |  de animais
-------------------------------------------------------------
Etinia:        Um sistema de cadastro|  Um sistema de 
               para a realização de  |  delivery
               uma prova             |
-------------------------------------------------------------

-=-=-=-=-=-=-=-=- 4º Questão -=-=-=-=-=-=-=-=-
    a) Sim, já que uma conta deve pertencer a uma pessoa.

    b) Sim; O conjunto de contas pertencentes a uma pessoa 
       poderiam ser colocados dentro de um array.

-=-=-=-=-=-=-=-=- 5º Questão -=-=-=-=-=-=-=-=-

R:  Professor, Aluno, Turmas, Boletim, Matérias, Calendário, Notificações.

-=-=-=-=-=-=-=-=- 6º Questão -=-=-=-=-=-=-=-=-

R: Personagem: {nome, classe, nivel, atributos, equipamentos, habilidades,  
            atacar, defender, usar Habilidade}

Inimigos: {nome, classe, nivel, atributos, equipamentos, habilidades, 
        atacar, defender, usar Habilidade}

Mercador: {nome, itens disponíveis, pedidos, comprar, vender}

Ferreiro: {nome, itens disponíveis, pedidos, comprar, vender, criar itens}

Alquimista: {nome, itens disponíveis, pedidos, 
            comprar, vender, criar itens, encantar itens}

Guilda: {nome, missões normais, missões especiais}

Armas {nome, tipo, raridade, dano, efeito}

Armaduras: {nome, tipo, raridade, defesa, efeito}

Poções: {nome, tipo, raridade, efeito}

-=-=-=-=-=-=-=-=- 7º Questão -=-=-=-=-=-=-=-=- */

class Retangulo {
    l1: number;
    l2: number;
    
    calculaArea(): number {
        return this.l1 * this.l2
    }

    calculaPerimetro(): number {
        return (this.l1 + this.l2) * 2
    }
}

let retangulo = new Retangulo()

retangulo.l1 = 10
retangulo.l2 = 20

console.log(retangulo.calculaPerimetro())

/*-=-=-=-=-=-=-=-=- 8º Questão -=-=-=-=-=-=-=-=- */

class Circulo {

    raio : number;

    calculaArea(): number {
        return 3.14 * (this.raio * this.raio)
    }

    calculaPerimetro(): number {
        return 2 * 3.14 * this.raio
    }
}

let circulo = new Circulo()

circulo.raio = 8

console.log(circulo.calculaArea())
console.log(circulo.calculaPerimetro())

/*-=-=-=-=-=-=-=-=- 9º Questão -=-=-=-=-=-=-=-=- */

class SituacaoFinanceira {

    valorCreditos: number
    valorDebitos: number

    calculaSaldo(): number {
        return this.valorCreditos - this.valorDebitos
    }
}

let sitFin = new SituacaoFinanceira()

sitFin.valorCreditos = 5520
sitFin.valorDebitos = 630

console.log(sitFin.calculaSaldo())