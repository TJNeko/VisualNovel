

// Function to start the game
function initGame() {

  displayStory("Welcome to DeadEnd the visual Novel game!");
  
  getPlayerName();
}

// Function for the next button 
function handleNextButtonClick() {
 
  const nextStoryPart = getNextStoryPart();
  displayStory(nextStoryPart);
}

// Function to display the story text on screen 
function displayStory(storyText) {
 
  const storyContainer = document.getElementById('storyContainer');
  storyContainer.textContent = storyText;
}

// Function to prompt the player to enter name
function getPlayerName() {
  const playerName = prompt("Please enter your name:");
 
  if (playerName) {
   
      window.playerName = playerName;
  }
}

// Function to fetch the next part of the story (can be from predefined list or object)
function getNextStoryPart() {
  
  // return "..";
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGame);
