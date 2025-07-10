// Initialize 
// set first element as the largest number. 
// compare  
// loop through array and update max if larger number found.  
// return 
// Output the maximun value after full traversal.

let arr = [10, 15, 38, 20, 13];

// let largest = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largest){
//         return largest = arr[i] 
//     }
// }

// console.log(largest);

let larger = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > larger){
        larger = arr[i]
    }
}

console.log(larger);
