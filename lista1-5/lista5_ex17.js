console.clear();

let num = 0, pow = 0, somapow = 0;;

for (let k = 0 ; k < 100 ; k++){
    num = num + 1;
    pow = num ** 2;
    somapow = somapow + pow;
    console.log(num);
};

console.log(somapow);