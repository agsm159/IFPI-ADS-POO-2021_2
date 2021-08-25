function hms(time: number){

    let seg = 0
    let min = 0
    let hora = 0

    while(time >= 3600){
        time -= 3600
        hora++
    }

    while(time >= 60){
        time -= 60
        min++
    }
    
    seg = time
    
    console.log(`Horario: ${hora}:${min}:${seg}`)
}

hms(37230)
