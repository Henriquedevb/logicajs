const fs = require('fs');

function gravaNoArquivo(arq, dados){
    fs.writeFileSync(arq,`${dados}\n`, {flag: "a"});
}

dados = "Vamos estudar programação!";
gravaNoArquivo('info.txt', dados);
