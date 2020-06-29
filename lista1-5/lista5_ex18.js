console.clear();

let num = 0, half = 0, somahalf = 0;;

for (let k = 0 ; k < 100 ; k++){
    num = num + 1;
    half = num / 2;
    somahalf = somahalf + half;
    console.log(num);
};

console.log(somahalf);