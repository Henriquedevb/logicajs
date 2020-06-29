/*
Questao 8
Escreva um programa que receba uma matriz com de 5 linhas e 2 colunas. 
A primeira coluna armazena o nome de um produto, a segunda coluna 
armazena o preço do produto. Escreva um programa que ordene a matriz do 
produto mais barato para o mais caro.
*/
function imprime(matriz){
    saida = "";
    for(l=0; l<matriz.length; l++){
        for(c=0; c<matriz[l].length; c++){
            saida += `${matriz[l][c]} \t`;
        }
        saida += "\n";
    }
    console.log(saida);
}

function selecaoDireta(vet){
    for(k=0; k<vet.length-1; k++){
        for(m=k+1; m<vet.length; m++){
            if(vet[m][1] < vet[k][1]){
                [ vet[k], vet[m] ] = [ vet[m], vet[k] ];
            }
        }
    }
}

console.clear();

prod = [
            ['Café', 10.57],
            ['Açúcar', 15.05],
            ['Leite', 3.22],
            ['Feijão', 12.47],
            ['Arroz', 17.22]
       ];

imprime(prod);
selecaoDireta(prod);
imprime(prod);