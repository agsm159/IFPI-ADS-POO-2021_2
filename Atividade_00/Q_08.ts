function vetorPar(){

    let vetor1 = new Array(1,2,3,4,5,6,7,8,9,10)
    let vetor2 = new Array(11,12,13,14,15,16,17,18,19,20)
    let vetor = vetor1.concat(vetor2)
    let i = 0
    let cont = 0

    for( i = 0; i < 20; i++){
        
        if(vetor[i] % 2 == 0){
            cont++
        }
    }

    console.log(`Existem ${cont} números pares nesse vetor.`)
}

vetorPar()
