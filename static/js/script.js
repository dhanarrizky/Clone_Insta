let nextstory = document.querySelector("#next-story")
let beforestorybutton = document.querySelector(".before-story")
let beforestory = document.querySelector("#before-story")
    
let scrollNum = 0;
let maxItems = 9;
    
function ShowButtonBefore(){
    if(scrollNum > 0){
        beforestorybutton.classList.remove("none-display")
    } else {
        beforestorybutton.classList.add("none-display")
    }
}



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
        beforestorybutton.classList.add("none-display")
        logo.style = "display: none;"
        logo2.style = "display: block;"
        searchNum += 1;
    } else {
        searchplace.classList.add("hidden")
        logo2.style = "display: none;"
        logo.style = "display: block;"
        // beforestorybutton.classList.remove("none-display")
        searchNum -= 1;
    }
})

let notifNum = 0;
notif.addEventListener('click', function(){
    if(notifNum == 0){
        notifplace.classList.remove("hidden")
        beforestorybutton.classList.add("none-display")
        logo.style = "display: none;"
        logo2.style = "display: block;"
        notifNum += 1;
    } else {
        notifplace.classList.add("hidden")
        logo2.style = "display: none;"
        logo.style = "display: block;"
        beforestorybutton.classList.remove("none-display")
        notifNum -= 1;
    }
})




nextstory.addEventListener('click',function(){
    let nextStory = document.querySelector(".story-place")
    nextStory.scrollBy(300,0)  
    if(scrollNum != maxItems){
        scrollNum = scrollNum + 3;
    }
    ShowButtonBefore()
    console.log(scrollNum)
})

beforestory.addEventListener('click',function(){
    let nextStory = document.querySelector(".story-place")
    nextStory.scrollBy(-300,0)
    if(scrollNum > 0){
        scrollNum = scrollNum - 3;
    }
    ShowButtonBefore()
    console.log(scrollNum)
})

