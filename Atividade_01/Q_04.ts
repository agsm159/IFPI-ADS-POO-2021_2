enum diasSemana{

    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
}

namespace diasSemana {
    export function isDiaUtil(diaSema: string) : boolean {
        if(diaSema == '6' || diaSema == '7'){
            return false;
        }
        return true;
    }
}

console.log(diasSemana.isDiaUtil('6'));
console.log(diasSemana.isDiaUtil('3'));