const nextButton = document.getElementById("next-button");


nextButton.addEventListener("click", () => {
    const url = window.location.href;
    const currentStoryId = url.split("/")[4];

    window.location.href = "/story/" + (parseInt(currentStoryId) + 1)
})