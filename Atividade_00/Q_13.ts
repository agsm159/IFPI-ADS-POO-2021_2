function contD(n: number, d: number){
    
    let mil = 0
    let cen = 0
    let dez = 0
    let uni = 0
    
    let cont = 0

    if(d > 0 && d <= 9 ){
        
        mil = Math.trunc(n / 1000) % 10
        cen = Math.trunc(n / 100) % 10
        dez = Math.trunc(n / 10) % 10
        uni = Math.trunc(n / 1 ) % 10 

        if(mil == d){
            cont++;
        }

        if(cen == d){
            cont++;
        }

        if(dez == d){
            cont++;
        }

        if(uni == d){
            cont++;
        }
    }
    console.log(cont);
}

contD(7677, 7);
