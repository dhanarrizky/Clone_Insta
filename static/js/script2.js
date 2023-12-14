let nextstory = document.querySelector("#next-story")
let beforestorybutton = document.querySelector(".before-story")
let beforestory = document.querySelector("#before-story")
    
let scrollNum = 0;
let maxItems = 9;
    
//==== for function on nav bar
let search = document.querySelector("#search")
let notif = document.querySelector("#notif")

let searchplace = document.querySelector("#searchplace")
let notifplace = document.querySelector("#notifplace")

let logo = document.querySelector("#logo")
let logo2 = document.querySelector("#logo2")

let searchNum = 0;
search.addEventListener('click', function(){
    if(searchNum == 0){
        searchplace.classList.remove("hidden")
        logo.style = "display: none;"
        logo2.style = "display: block;"
        searchNum += 1;
    } else {
        searchplace.classList.add("hidden")
        logo2.style = "display: none;"
        logo.style = "display: block;"
        searchNum -= 1;
    }
})

let notifNum = 0;
notif.addEventListener('click', function(){
    if(notifNum == 0){
        notifplace.classList.remove("hidden")
        logo.style = "display: none;"
        logo2.style = "display: block;"
        notifNum += 1;
    } else {
        notifplace.classList.add("hidden")
        logo2.style = "display: none;"
        logo.style = "display: block;"
        notifNum -= 1;
    }
})


