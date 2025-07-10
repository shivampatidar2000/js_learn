
function count(s){
    const obj = {};
    for(let char of s){
        obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
}

// console.log(count("hello shivam"))



// using map  
function count1(s){
    const map = new Map();
    for(const a of s){
        map.set(a, (map.get(a) || 0) + 1);
    }
    return map;
}
console.log(count1("hello rahul"))


function count2(s){
    const obj = {};
    [...s].forEach((char)=>{
        obj[char]= (obj[char] || 0) + 1
    });
    return obj;
}
console.log(count2("hello rahul"))
