let sentance = "Java is good language";
let word = ""
let words = []
let reverse = ""
for(let i = 0; i <= sentance.length; i++){
    if(sentance[i]=== " " || i === sentance.length){
        words.push(word)
        word = ""
    }else{
        word += sentance[i]        
    }
}

for(let j = words.length - 1; j>=0; j--){
    reverse += words[j]    
    if(j > 0){
        reverse += " "
    }
}

console.log("original sentance: ", sentance)
console.log("reverse  sentence: ",reverse);
