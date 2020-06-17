const prompt = require('prompt-sync')({sigint: true});

function selecaoDireta(mtx, col){
    for(let k = 0; k< mtx.length; k++){
        for(let j = 0; j < mtx.length; j++){
            if(mtx[j][col] = mtx[k][col]){
                mtx[k], mtx[j] = mtx[j], mtx[k];
            };
        };
    };
};

function imprime(mtx){
    var saida = '';
    for(l = 0; l < mtx.length; l++){
        for(c = 0; c < mtx[l].length; c++){
            saida += `${mtx[l][c]} \t`;
        }
        saida += "\n";
    }
    saida += "\n";
};

meteoro = [
    ['Rio de Janeiro', 28, 10],
    ['Brasília', 25, 11],
    ['Goiânia', 27, 12],
    ['Anápolis', 27.5, 13],
    ['São Paulo', 22, 9]
  ];



do{
    console.clear();
    let menu  = "";
    menu += "1 - Ordenar por cidade\n";
    menu += "2 - Ordenar por temperatura\n";
    menu += "3 - Ordenar por hora de medição\n";
    menu += "4 - Sair\n";
    console.log(menu);
    opcao = Number(prompt("Escolha uma opção: "));

    switch(opcao){
        case 1:
            console.clear();
            console.log("Ordenado por cidade");
            selecaoDireta(meteoro, 0);
            imprime(meteoro);
            prompt();
            break;
        case 2:
            console.clear();
            console.log("Ordenado por temperatura");
            selecaoDireta(meteoro, 1);
            imprime(meteoro);
            prompt();
            break;
        case 3:
            console.clear();
            console.log("Ordenado por hora de medição");
            selecaoDireta(meteoro, 2);
            imprime(meteoro);
            prompt();
            break;
        case 4:
            console.log("Obrigado por sua visita!");
            break;
        default:
            console.log("Opção inválida!");
            prompt();
            break;
    }
}while(opcao != 4);


