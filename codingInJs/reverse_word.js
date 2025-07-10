// reverse string program 
let string ="hello world this is javascript"
function reversestr(str){
let strstore = ""

    for(let char of str){
        strstore = char + strstore;
    }
    console.log(strstore);
}
reversestr(string)



// reverse word program 

let reversed = string.split(" ").reverse().join(" ");

console.log(reversed)


// with method reverse word program

let stanse ="hello world this is javascript"
let word = ''
let words = []
let reverse ='';

for(let i = 0; i <= stanse.length; i++){
    if(stanse[i] === " " || i === stanse.length){
        words.push(word)
        word = ''
    }else{
        word += stanse[i]
    }
}
console.log(words)
//  reverse array  
for(let j = words.length -1 ; j >= 0; j--){
    reverse += words[j]
    if(j > 0 ){
        reverse += ' '
    }
}
console.log(reverse);
