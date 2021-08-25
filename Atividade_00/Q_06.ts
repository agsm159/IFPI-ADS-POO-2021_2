function somaMedia(num: number){

    let soma = 0
    let media = 0
    const div = num
    
    while(-1 < num){

        soma += num
        num--
    }
    media = soma / div

    console.log(`A soma dos números é ${soma} e a média é ${media}`)
}

somaMedia(5)
