/* ------------ POO: ATIVIDADE 04 ------------ 

-=-=-=-=-=-=-=-=- 1º Questão -=-=-=-=-=-=-=-=- */

class somarArray {

    pares = [2,4,6,8,10]
    soma = 0

    somar(): number {

        for (let i = 0; i < this.pares.length; i++) {
            this.soma += this.pares[i]
        }

        return this.soma
    }
}

let somando = new somarArray()
console.log(somando.somar())

/* -=-=-=-=-=-=-=-=- 2º Questão -=-=-=-=-=-=-=-=- */

let a : number[] = [1,2,3,4,5];
for (let i : number = 0; i <= a.length; i++) {
console.log(a[i]);
}

/* Ao se executar o código acima, obtem-se como resultado "1,2,3,4,5,undefined",
pois é mostrado o resultado que se encontra na posição do valor de "i", dessa forma,
ao se passar da posição do ultimo valor é retornado "undefined".

 -=-=-=-=-=-=-=-=- 3º Questão -=-=-=-=-=-=-=-=- */

let nums1 =[1,3,4,2,5,6,10,8,7,9]
let nums2 =[1,3,5,4,8,6,7,9,10,2]

nums1.sort((a,b)=> a - b)
nums2.sort((a,b)=> b - a)

console.log('Ordem crescente:',nums1)
console.log('Ordem decrescente:',nums2)

/* -=-=-=-=-=-=-=-=- 4º Questão -=-=-=-=-=-=-=-=- */

class mudarString {
    
    palavra : string = "Instituto Federal do Piauí"

    mudarMaiuscula() : string {
        
        return this.palavra.toUpperCase()
    }
    
    retornaPosicao(): string {
            
        return this.palavra.charAt(10)
    }

    ultimaVogal(): number {
            
        return this.palavra.lastIndexOf('o')
    }
    
    espaçamento(): string {
                
        return this.palavra.split('').join(' ')
    }
}

let mudar = new mudarString()
console.log(mudar.mudarMaiuscula())
console.log(mudar.retornaPosicao())
console.log(mudar.ultimaVogal())
console.log(mudar.espaçamento())
