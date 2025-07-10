let a = 12345
let sum = 0;
// for(let i = 1; i <= a; i++){
//     let digit = a % 10
//     sum += digit
//     a = Math.floor(a/10)
// }
// console.log(sum);

while(a > 0){
    let digit = a % 10
    sum += digit
    a = Math.floor(a / 10)
}

console.log(sum);


let b = 6
let sum1 = 0
for(let i = 0; i <= b; i++){
    sum1 += i
}

console.log(sum1);


let array = [1,2,3,4,5]

let sum2 = 0;

for(let i = 0; i < array.length; i++){
    sum2 += array[i]
}
console.log(sum2);


// remove duplicate from the array  
let arr = [1,2,3,4,5,5,4,3,2,1,6];
let uniq = [];

for(let i = 0; i < arr.length; i++){
    let brack = true
    for(let j = 0; j < uniq.length; j++){
        if(arr[i]=== uniq[j]){
            brack = false
            break;
        }
    }
    if(brack == true){
        uniq.push(arr[i])
    }
}

console.log(uniq);


let santense = "Java script is Good language";
let word = ""
let words = []
let reverse = ""

for(let i = 0; i <= santense.length; i++){
    if(santense[i] === " " || i === santense.length){
        words.push(word)
        word = ""
    }else 
    word += santense[i]
}
console.log(words);
for(let j = words.length - 1; j>=0; j--){
    reverse += words[j];
    if(j > 0){
        reverse += " "
    }
}

console.log(reverse);


// even or odd number
let arr1 = [1,2,3,4,5,6,7,8,9,10]

let even_num = []
let odd_num = []

for(let i = 0; i < arr1.length; i++){
    if(arr1[i] %2 === 0){
        even_num.push(arr1[i])
    }else
    odd_num.push(arr1[i])
}

console.log(arr1);
console.log(even_num);
console.log(odd_num);


// length of the string with out .length()

let string = "shivam"
let count = 0

for(let i = 0; i< string.length; i++){
    count ++
}
console.log(count);


// string to integer convart

let str = "1234"
let num = 1234

let str_to_num = Number(str)
let num_to_str = String(num)

console.log(typeof str_to_num, str_to_num);
console.log(typeof num_to_str, num_to_str);



// find even or odd for the array index 
let arr2 = ['Java', 'script', 'is', 'Good', 'language']
let even_num1 = ""
let odd_num1 = ""
for(let i = 0; i<arr2.length; i++){
    if(i % 2 === 0){
        even_num1 += arr2[i]
        if( i >= 0){
            even_num1 += " "
        }
    }else{
        odd_num1 += arr2[i]
        if( i >= 0){
            odd_num1 += " "
        }
    }
}
console.log("Even number word-> ", even_num1)
console.log("Odd number word-> ",odd_num1)

// reverse array

let arr3 = [1,2,3,4,5,6,7]
let rever_arr = []
for(let i = arr3.length - 1; i >= 0; i--){
    rever_arr.push(arr3[i])
}
console.log(rever_arr);



// check array is short of not 

function checkShort(arr4){
let isShort = true

    for(let i = 0; i <= arr4.length; i++){
        if(arr4[i] > arr4[i + 1]){
            return false
        }
    }
        return true

    // console.log(isShort)
}
console.log(checkShort(arr3))


// case sensitive 

let str1 = "Java Script"
function swapString(str){
    let swapper = ""
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if( char >="a" && char <="z" ){
            swapper += char.toUpperCase();
        }else if( char >="A" && char <="Z"){
            swapper += char.toLowerCase()
        }else {
            swapper += char 
        }
    }
    return swapper;
}

console.log(swapString(str1));
