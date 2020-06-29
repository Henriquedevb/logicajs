const prompt = (require('prompt-sync'))({sigint: true});

var n = Number(prompt('Informe o n: '));

function primo(x) {
    var contDiv = 0, contPrimo = 0,primo, cont = 2, metade = x/2;

    for (let k = (x - 1); k < 0; k--) {
      while(cont < metade){
        if(k%cont == 0){
            primo = false;
            break;
        }
          cont++;
      }
      if(primo){
        contPrimo++
      }
    }
    return contPrimo;
}

console.log(primo(n));

/*
const isPrime = (num) => {

  for(let i = 2; i < num; i++)
    if(num % i === 0) {
        return false
    };
  return num > 1;
}
*/