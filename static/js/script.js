let beforestory = document.querySelector("#before-story")
let leftscroll = beforestory.scrollLeft;

function NextStoryScroll(){
    let nextStory = document.querySelector(".story-place")
    nextStory.scrollBy(300,0)  
    if (leftscroll === 0) {
        storyPlace.classList.add('at-top');
    } else {
        storyPlace.classList.remove('at-top');
    }
}

function BeforeStoryScroll(){
    let nextStory = document.querySelector(".story-place")
    nextStory.scrollBy(-300,0)
    if (leftscroll === 0) {
        storyPlace.classList.add('at-top');
    } else {
        storyPlace.classList.remove('at-top');
    }
}