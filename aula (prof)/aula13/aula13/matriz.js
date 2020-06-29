num = [
        [2, 3, 5],
        [7, 9, 10],
        [16, 42, 35],
      ];

saida = "";
for(lin=0; lin<3; lin++){
    for(col=0; col<3; col++){
        saida += num[lin][col] + "\t";
    }
    saida += "\n";
}

console.log(saida);