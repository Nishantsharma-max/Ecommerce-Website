let menu=document.querySelector("#mobile")
let menuItems=document.querySelector(".navbar")
let backbutton=document.querySelector(".back")
menu.addEventListener("click",()=>{
     menuItems.classList.add("change")
})
backbutton.addEventListener("click",()=>{
     menuItems.classList.remove("change")
})