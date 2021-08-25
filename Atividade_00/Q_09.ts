import * as readline from 'readline';

function subString(){
    
    let input = readline.createInterface({
        
        input: process.stdin,
        output: process.stdout
    })

    input.question("Digite uma frase: ", (result) => {
        
        console.log(result.replace(/(a|A)/g, 'b'))
        
        input.close()
    })
}

subString()
