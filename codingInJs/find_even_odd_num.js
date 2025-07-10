
let array = [1,3,4,56,7,88,9,9,0,32]
let even_num = [];
let odd_num = [];
for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
        even_num.push(array[i])
    }
    else{
        odd_num.push(array[i])
    }
}

console.log(even_num);
console.log(odd_num);

