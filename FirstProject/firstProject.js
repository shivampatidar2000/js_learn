    
    // document.addEventListener('DOMContentLoaded', ()=>{
    //     const div = document.createElement("div")
    //     div.appendChild(document.createTextNode("shivam is good boy"))
    //     document.body.appendChild(div);
    // })
    

    // const h2 = div.setAttribute('h2',"hy")
    // div.innerText = "shivam is good boy";
    // document.querySelector(".firstClass").appendChild(div);

    const buttons = document.querySelectorAll(".button")
    const body = document.querySelector('body')

    buttons.forEach((btn)=>{
        btn.addEventListener("click", (event)=>{
            console.log(event)
            console.log(event.target.id)
            if (event.target.id == "gray"){
                body.style.backgroundColor = event.target.id
            }else if(event.target.id == "white"){
                body.style.backgroundColor = event.target.id
            }else if(event.target.id == "red"){
                body.style.backgroundColor = event.target.id
            }else if(event.target.id == "yellow"){
                body.style.backgroundColor = event.target.id
            }

        })

        // console.log(btn)
    })
