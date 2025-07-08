// 1. Display Current Day and Time
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let time = new Date();
console.log("Today is :", weekday[time.getDay()])
    // console.log("Current time is : ", time.getHours() + time.week + " : " + time.getMinutes() + " : " +time.getSeconds())

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let prepent = (hours >= 12) ? "PM" : "AM";
    
    hours = (hours >= 12) ? hours - 12 : hours

    console.log(hours);

    if(hours === 0 && prepent === "PM"){
        if(minutes === 0 && seconds === 0){
            hours = 12;
            prepent = 'Noon';
        }else{
            hours = 12;
            prepent = "PM"
        }
    }

    if(hours === 0 && prepent === "AM"){
        if(minutes === 0 && seconds === 0){
            hours = 12;
            prepent = 'midnight';
        }else{
            hours = 12;
            prepent = "AM";
        }
    }
    
    console.log("Current time is : ", hours + " " + prepent + " : " + minutes + " : "+ seconds)