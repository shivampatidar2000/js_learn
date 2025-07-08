function random(number){ 
    return Math.round(Math.random() * number + 1)
}
let color_chage = ()=>{
    document.body.style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`
}
// console.log(color_chage)
let timer_id = null
const start = ()=>{
    if(timer_id == null){
        timer_id = setInterval(color_chage ,1000);
        console.log("✓ started");  
    }
}
const stop = ()=>{
    clearInterval(timer_id);
    timer_id = null;
    console.log("✗ stopped", timer_id);
}

  const interInter = document.querySelector('#start').addEventListener('click',start)
  const stop_inter = document.querySelector('#stop').addEventListener('click',stop)
