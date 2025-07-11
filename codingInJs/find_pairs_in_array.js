let arr = [1,3,4,5,6,7,8,5,3,5,3]
let target = 7

function findPairs(arr, target){
    let pair = []
    for(let i = 0; i<arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                pair.push([arr[i], arr[j]]);
            }
        }
    }
    return pair
}

console.log(findPairs(arr, target));
