const vowel = ["a","e","i","o","u"];
function vowel_count(str){
    let count = 0;

    for(let letter of str.toLowerCase()){
        if(vowel.includes(letter)){
            count++;
        }
    }
    return count;
}

console.log(vowel_count("shivam is the good boy"));
