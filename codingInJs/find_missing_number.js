let arr = [1,2,3,5]

function findMissingnumber(arr, num){
    let actual_number_sum = 0;
    for(let i=0; i< arr.length; i++){
        actual_number_sum += arr[i]
    }
    let expected_number_sum = (num * (num + 1))/2;

    return expected_number_sum - actual_number_sum
}

const number = 5;
const  missing = findMissingnumber(arr,number)
console.log(missing);
