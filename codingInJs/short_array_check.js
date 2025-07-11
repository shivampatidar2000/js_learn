function ifShortArray(array){
    for(let i = 0; i < array.length -1; i++){
        if(array[i] > array[i + 1]){
            return false
        }
    }
    return true
}
let array1 = [1,2,3,4,5,6]

let shor = ifShortArray(array1)
console.log(shor);


for(let i = 0; i< array1.length; i++){
    if(array1[i] > array1[i + 1]){
        console.log("it is not short")
    }
}