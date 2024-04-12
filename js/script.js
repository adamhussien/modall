'use strict'
const modal= document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closebtn =document.querySelector(".close")
const openModal = document.querySelector(".open-modal")
const closeModal = function(){
modal.classList.add("hidden")
overlay.classList.add("hidden")
}
const openMod = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    }
    
openModal.addEventListener("click",openMod)
closebtn.addEventListener("click",closeModal )

