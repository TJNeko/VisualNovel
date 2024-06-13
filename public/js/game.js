

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

const textBox = document.getElementById("user-name"); 
const button = document.getElementById("name-button");
const div1 = document.getElementById("first-section");
const div2 = document.getElementById("second-section");

textBox.addEventListener("keyup", function (event) { 

    // Checking if key pressed is ENTER or not 
    // if the key pressed is ENTER 
    // click listener on button is called 
    if (event.keyCode == 13) { 
        button.click(); 
    } 
}); 
// This event is fired when button is clicked 
button.addEventListener("click", function () { 
    let str = textBox.value; 
    console.log(str); 

  if (div2.style.display === "none") {
      div1.style.display = "none";
      div2.style.display = "block";
      
  const nameSection = document.getElementById('name-section');
  const secondParagraph = nameSection.textContent + str + "!";
  nameSection.innerHTML = secondParagraph;

  } else {
      div1.style.display = "block";
      div2.style.display = "none";
  }
}); 


// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGame);
