// find maximun number of array 
let arr = [1,43,54,75,2,32,21]
let FirstLarge = arr[0]
for(let i = 0; i < arr.length; i++){
    if( arr[i] > FirstLarge){
        FirstLarge = arr[i]
    }
}
console.log(FirstLarge);

// find secondLarge number of array 
 
let secondLarge = -Infinity
let large = -Infinity

for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    if(num > large ){
        secondLarge = large
        large = num
    }else if(num > secondLarge && num < large){
        secondLarge = num ;
    }
}

console.log("large number is ", large);

console.log("second large number is ", secondLarge);
