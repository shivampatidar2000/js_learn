let array1 = [1, 3, 4, 68, 4, 3, 2, 78, 5]

function arrShort(arr){
    let n = arr.length
    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(
 arrShort(array1));