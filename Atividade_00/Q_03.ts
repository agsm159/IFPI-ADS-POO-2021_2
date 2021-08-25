function menorValor(num1: number, num2: number, num3: number){

    console.log(`O menor número entre ${num1}, ${num2} e ${num3} é:`);
    
    if (num1 < num2 && num1 < num3)
        console.log(num1)

    else if (num2 < num1 && num2 < num3)
        console.log(num2)
    
    else if (num3 < num1 && num3 < num2)
        console.log(num3)
}

menorValor(6,15,4)
