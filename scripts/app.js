let menu = document.querySelector(".menu")
let menubtn = document.querySelector(".icon__small")
let menubtnicon = document.querySelector(".icon__small i")

menubtn.addEventListener("click",function(){
    if(menubtnicon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menubtnicon.classList = "fa fa-times"
        
    } else{
        menu.style.left = "-226px"
        menubtnicon.classList = "fa fa-bars"
    }
})