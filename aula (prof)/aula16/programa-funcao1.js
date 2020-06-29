/*
               MODULARIZAÇÃO
Existem dois tipos de módulo
PROCEDIMENTOS  -> Tipo de módulo que executa uma tarefa SEM RETORNO
FUNÇÕES        -> Tipo de módulo que executa uma tarefa COM RETORNO
*/
function linha(){   //conceitualmente é um procedimento
    console.log("*******************************");
}

function cabecalho(){  //conceitualmente é um procedimento
    linha();
    console.log("Nome: Cícero Almeida");
    console.log("Matrícula: 200812");
    linha();
}

function triplo(x){     //conceitualmente é uma função, pois RETORNA algum valor.
    return 3*x;
}


cabecalho();
num = 3;
console.log("Triplo = " + triplo(num));


