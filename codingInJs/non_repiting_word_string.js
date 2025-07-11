let str1 = "success";

function firstNonRepet(str){
    let obj = {}
    let length = str.length
    for(let i = 0; i< length; i++){
        obj[str[i]] = (obj[str[i]] || 0) + 1
    }   
    // console.log(obj);
    let nonRepeatingChars = [];
    for(let j = 0; j < length; j++){
        if(obj[str[j]] === 1){
            console.log(str[j])
            nonRepeatingChars.push(str[j])
        }
    }
    // for(let char of str){
    //     console.log(obj[char]);
        
    //     if(obj[char] === 1){
    //         nonRepeatingChars.push(char)
    //     }
    // }
    return nonRepeatingChars.length >= 2 ? nonRepeatingChars[0] : null;
}
console.log("first non repeting value is: ",firstNonRepet(str1));