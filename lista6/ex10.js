var mtx = [];

while(true){
    let random = Math.floor(Math.random() * 1000);

    if (random % 4 === 0) {
        mtx.push(random);
    }

    if (mtx.length === 50) {
        break;
    }
    
}

console.log(mtx);