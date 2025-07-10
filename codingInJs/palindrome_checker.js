// problem  
// check if the given string reads the same backward ad forward.
// technique 
// compare original string with its reverse 

// first solution 

function checkPalindrome(str){
    let length_of_string = str.length;
    for(let i = 0; i < length_of_string/2; i++){
        // console.log(str[length_of_string - 1 - i])
        if(str[i] !== str[length_of_string - 1 - i]){
            return console.log('It is not a palindrome'); 
        }
    }
    return console.log("It is a palindrome';");
}
const value = checkPalindrome("dad");

console.log(value);

//   approch => cover string to the reverse string and checking with the condition
function checkPalindrome1(string){

    // so first splite the string -> string method used to divide a string into an ordered list of substrings
    // then reverse the string then join the string using the "" 
    const array_conver = string.split("").reverse().join("")

    if (string !== array_conver){
        return console.log('It is not a palindrome'); 
    }
    else{
       return console.log("It is a palindrome';"); 
    }
}

const value1 = checkPalindrome1("dad");

console.log(value1);


function checkPalindrome2(string){
    let string_rever = ""
    for (const char of string) {
    // in the for of loop char is the element of the string it is pick one element at a time the store the element in the string_rever after complite the loop of reverse value we can check with condiation 
        string_rever = char + string_rever
    }
    if (string === string_rever)
    {
        console.log("It is a palindrome';")
    }else{
        console.log('It is not a palindrome'); 
    }
}


const value2 = checkPalindrome1("rahul");

console.log(value2);
