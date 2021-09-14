enum siglaEstado{
    Sigla1 = "PI",
    Sigla3 = "CE",
    Sigla2 = "MA"
}

// a) Crie um laço usando for para imprimir esses valores;
for(let i in siglaEstado){
    console.log(siglaEstado[i]);
}

//b) Crie um laço que imprima os índices dessa enum e diga o que aconteceu.
for(let i in siglaEstado){
    console.log(i);
}
