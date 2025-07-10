let array = [1,2,3,4,5,6,7,6,4,3,2,1];
let duplicate = [];

for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] === array[j]){
            let alredayExist = false;

            for(let k = 0; k < duplicate.length; k++){
                if(duplicate[k] == array[i]){
                    alredayExist = true;
                    break;
                }
            }
            if(!alredayExist){
                duplicate.push(array[i])
            }
        }
    }
}
console.log(duplicate);
