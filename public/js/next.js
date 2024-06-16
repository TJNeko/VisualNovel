const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const currentStory = document.getElementById("current-story")
const isDead = currentStory?.getAttribute("dead");

//after dead, this button should be disabled
nextButton?.addEventListener("click", () => {
    const url = window.location.href;
    const currentStoryId = url.split("/")[4];

    window.location.href = "/story/" + (parseInt(currentStoryId) + 1)
})

//after choice and dead, this button should be disabled
backButton?.addEventListener("click", () => {
    const url = window.location.href;
    const currentStoryId = url.split("/")[4];
    const currentStoryPg = parseInt(currentStoryId);
    
    window.location.href = "/story/" + (parseInt(currentStoryId) - 1)
})