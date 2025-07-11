let arr = ["apple","banana", "mango", "apple", "orange"]
let obj = {}
for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = (obj[arr[i]] || 0) + 1
}

console.log(obj);
