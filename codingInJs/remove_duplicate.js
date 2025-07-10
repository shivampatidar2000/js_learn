let array = [1,2,4,3,2,1,5,6,3,2,4,5]
let uniq = []

for(let i = 0; i <= array.length; i++){
    let bracj = true;
    for(let j = 0; j <= uniq.length; j++){
        if(array[i] === uniq[j]){
            bracj= false;
            break;
        }
    }
    if(bracj == true){
        uniq.push(array[i])
    }
}
console.log(uniq);


let num = 12345;

let sum = 0;

while(num > 0){
    let digit = num % 10 // it is take last digit 
    sum += digit // we can store the digit and make some
    num = Math.floor(num / 10) // we can remove the value
}
console.log(sum)


let num1 = 5;
let sum2 = 0;
for(let i = 0; i<= num1; i++){
    sum2 += i
}
console.log(sum2);

let array1 = [1,2,3,4,5,6]
let sum3 = 0;
for(let i = 0; i<=array1.length; i++){
    sum3 += i 
}
console.log(sum3);



