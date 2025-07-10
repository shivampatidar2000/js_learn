
let number12 = 17;
if(number12 < 2){
    return false
} 

for(let i = 2; i <= Math.sqrt(number12); i++){
    if(number12 % i === 0){
        // return false
        console.log(`${number12} it is not prime number`);
        break;
    }else{
        console.log(`${number12} it is prime number`);
        break;
    }
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Example usage:
let number = 17;

if (isPrime(number)) {
  console.log(number + " is a prime number");
} else {
  console.log(number + " is not a prime number");
}

// if(number <= 1){
//     isprime = false;
// }else{
//     for(let i = 2; i<= Math.sqrt(number); i++){
//         if(num % 2 == 0){
//            isprime = true; 
//         }
//     }
// }