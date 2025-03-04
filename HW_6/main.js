let minNumber = 1;
const maxNamber = 10;

while (minNumber < maxNamber) {
  console.log(minNumber);
  minNumber += 1;
}

for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue; 
    }
    console.log(i); 
}

let число = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${число} * ${i} = ${число * i}`);
}

let n = 13; 

for (let i = 4; i < 15; i++) {  
    if (i >= n) {
        break; 
    }
    console.log(i); 
}


let i = 1;

while (i <= 20) {
    if (i % 3 === 0) {
        i++; 
        continue; 
    }
    console.log(i); 
    i++; 
}