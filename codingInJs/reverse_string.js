// Reverse String 

let s = "shivam"

// console.log(s.split("").reverse().join(""))

function reverseStr(str){
    return str.split("").reverse().join("")
}

const string_value = "Hello World"
// console.log(reverseStr(string_value))



function reverseStr1(str){
    let string_value = "";
    for(char of str){
        // console.log(char)
        string_value  = char + string_value
        // console.log(string_value);
        
    }
    return string_value
}
console.log(reverseStr1("hello shivam"))

