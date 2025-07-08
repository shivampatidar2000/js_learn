function cToF(celsius){
    let cTemp = celsius;
    let cToFahr = cTemp *9 / 5 + 32
    let  message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message)

}

function ftoC(fahrenheit){
    let fTemp = fahrenheit;
    let fTocels = (fTemp - 32) * 5 / 9
    let message = fTemp + '\xB0F is ' + fTocels + '\xB0C.';
    console.log(message)
}

cToF(60)
ftoC(45)


