let random = Math.ceil(Math.random() * 10);
console.log(random);

var gnum = prompt("Enter the value")
if (gnum == random){
    console.log("Good Work")
}else{
    console.log('Not matched, the number was ' + gnum); 
}