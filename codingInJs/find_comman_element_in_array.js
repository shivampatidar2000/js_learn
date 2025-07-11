array = [1,2,3,45,6,9]
array1 = [2,3,56,1,9,45]
let arr = []

for(let i = 0; i< array.length; i++){
    for(let j = 0; j < array1.length; j++){
        if(array[i] === array1[j]){
            arr.push(array1[j])
        }
    }
}

let length = arr.length 
for(let i = 0; i < length-1; i++){
    for(let j = 0; j < length - i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr);

