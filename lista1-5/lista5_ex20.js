console.clear();

let num = 0, media = 0, count = 0;;
console.log('Número à esqueda, média à direita.'); 
//a média se baseia na soma dos números anteriores dividido pela contagem de números anteriores

for (let k = 0 ; k < 100 ; k++){
    num = num + 1;
    count = count + num;
    media = count / num;
    
    console.log(num , media);
};
