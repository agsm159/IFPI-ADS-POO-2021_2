import * as readline from 'readline';

function removeVogal(){
    
    let input = readline.createInterface({
        
        input: process.stdin,
        output: process.stdout
    })

    input.question("Digite uma frase: ", (result) => {
        
        console.log(result.replace(/(a|e|i|o|u)/gi, ''))
        
        input.close()
    })
}

removeVogal()
