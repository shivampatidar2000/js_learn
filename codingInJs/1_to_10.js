
// first program reverse string
function reverseStr(str){
    let str_print = ""
    for(char of str){
        str_print = char + str_print
    }
    return str_print;
}

console.log(reverseStr("shivam is"));

// charcter count program
function charcount(str){
    let obj = {};

    for( let char of str){
        obj[char] = (obj[char] || 0) + 1
    }
    console.log(obj);
    
}
charcount("hello")

// factorial_series program

let number = 5;

if(number < 0){
    console.log('Error! Factorial for negative number does not exist.');
}else if(number == 0){
    console.log(`factorial of ${number} is 1`)
}else {
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact *= i;
    }
    console.log(fact)
}

// fibonacco serise  program

number = 6
let n1 = 0; n2 = 1; 
let nextTerm;

for(let i = 1; i <= number; i++){
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;    
}
console.log(nextTerm);


// find large number 
let array = [1,2,3,4,56,32,23,59]
let large = array[0];

for(let i = 0; i < array.length; i++){
    if(array[i] > large){
        large = array[i]
    }
}
console.log(large)


// find small number  
let array1 = [1,2,3,4,56,32,23,59]
let small = array1[0];

for(let i = 0; i < array1.length; i++){
    if(array1[i] < large)
    {
        large = array1[i]
    }
}
console.log(small);


// palindrome checker 

function palindrome(str){
    let rever  = "";
    for(let i of str){
        rever = i + rever
    }
    if(rever === str){
        return console.log(`${str} is palindrome`)
    }else{
        return console.log(`${str} is not palindrome`)
    }
}

palindrome("dad")


function palindrome1(str){
    let rever  = "";
    let strlen = str.length;
    for(let i; i < strlen/2; i++){
        if (str[i] !== str[strlen - 1 - i]){
            return console.log(`is not palindrome`)
        }
    }
    return  console.log(`is palindrome`)
}

palindrome1("mom")


// swap two number 
let a = 22;
let b = 32;

console.log(`a: ${a}, b:${b}`);

a = a + b 
b = a - b 
a = a - b
console.log(`a: ${a}, b:${b}`);

// vowel find 

let vowel = ["a","e","i","o","u"]

function vowel_count(str){
    count = 0;
    const3 = 0;
    for(let i of str){
        if(vowel.includes(i)){
            count ++
        }
        else {
        const3 ++ 
        }
    }
    console.log("vowel",count);
    console.log("constant",const3);

    
}
vowel_count("shivam is")



// rever 
let array2 = [23,345,76,5,32]

let a1 = array2[0]

for(let i = 0; i < array2.length; i++){
    if(array2[i] > a1){
        a1 = array2[i]
    }
}
console.log(a1)

let a2 = array2[0]
for(let i = 0; i < array2.length; i++){
    if(array2[i] < a2){
        a2 = array2[i]
    }
}
console.log(a2);


let num = 31;

if(num % 2===0){
    console.log("prime number")
}else{
    console.log("Not prime number");
}

let a3 = 32 ; b3 = 43;

console.log(`a3: ${a3} b3: ${b3}`);

a3 = a3 + b3 
b3 = a3 - b3
a3 = a3 - b3

console.log(`a3: ${a3} b3: ${b3}`);

function findVolwl(str){
    let count = 0;
    for(let char of str){
        if(vowel.includes(char)){
            count++;
        }
    }
console.log(count);
}

findVolwl("shivam is good")