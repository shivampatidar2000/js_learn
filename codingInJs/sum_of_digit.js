let number = 123456;
let sum = 0;

while(number > 0){
    let digit = number % 10
    sum += digit
    number = Math.floor(number / 10)
}
console.log(sum)


let num1 = [2,4,5,6,7]

let sum1 = 0;

for(i = 0; i < num1.length; i++){
    sum1 += num1[i]
}
console.log(sum1)


let num2 = 5;
let sum2 = 0;
for(let i = 0; i <= num2; i++){
    sum2 += i
}

console.log(sum2)