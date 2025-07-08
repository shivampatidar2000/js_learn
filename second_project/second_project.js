const form = document.querySelector('form')

// this use case is give the empty error 
//    const  weight = parseInt(event.querySelector("#weight").value)
form.addEventListener('submit',(event)=>{
    event.preventDefault() // it is hold the the value 
    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    const result = document.querySelector(".result")
    const guide = document.querySelector(".result-guide")

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Plase give a valid height";
    } else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Plase give a valid weight";
    }
    else{
        const bmi = (weight / ((height * height)/10000).toFixed(2))
        // show the result 
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            guide.innerHTML = `<h3>Under weight</h3>`
        }else if(bmi > 18.6 && bmi < 24.9){
            guide.innerHTML = `<h3>Normal weight</h3>`
        }else {
            guide.innerHTML = `<h3>Over weight</h3>`
        }
    }
})