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