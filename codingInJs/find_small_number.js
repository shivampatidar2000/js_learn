
let arr = [23,34,78,23,212,1,0,4]

let smaller = arr[0];

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] < smaller){
        smaller = arr[i]
    }
}

console.log(smaller)