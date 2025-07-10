const open_project = document.querySelector(".modal-btn")
const close_project = document.querySelector(".close-btn")
const overlay = document.querySelector(".modal-overlay")

open_project.addEventListener("click",()=>{
    console.log(overlay.classList.add("open-modal"))
})
close_project.addEventListener("click",()=>{
    console.log(overlay.classList.remove("open-modal"))
    
})