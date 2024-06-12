function setStoryPositionCookie(position) {
    document.cookie = `story_position=${position}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  }

  function getStoryPositionFromCookie() {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; story_position=`);
    if (parts.length === 2) return parseInt(parts.pop().split(';').shift());
    return 0; 
  }

  let userProgress = getStoryPositionFromCookie();

  function initGame() {
    displayStory(stories[userProgress].story);
}
function handleNextButtonClick() {
    userProgress++;
    setStoryPositionCookie(userProgress);
    displayStory(stories[userProgress].story);
}

// Function to handle progression and update progress bar
function advanceStory(progressIncrement) {
 
  storyProgress += progressIncrement;

  
  if (storyProgress > 100) {
      storyProgress = 100;
  }

  
  const progressBar = document.getElementById('story-progress');
  progressBar.value = storyProgress;
}

const choiceButtons = document.querySelectorAll('.choice-button');
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
      
      const progressIncrement = parseInt(button.dataset.progressIncrement);

     
      advanceStory(progressIncrement);
  });
});
