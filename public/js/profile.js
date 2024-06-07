
// Function to start the game
function initGame() {

  displayStory("Welcome to the Visual Novel Game!");
  
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

// const newFormHandler = async (event) => {
//   event.preventDefault();
// //TODO: Here add user choices
//   const name = document.querySelector('#story-name').value.trim();
//   const needed_funding = document.querySelector('#story-funding').value.trim();
//   const description = document.querySelector('#story-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create story');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/story/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete story');
//     }
//   }
// };


// Function to fetch the next part of the story (can be from predefined list or object)
function getNextStoryPart() {
  
  // return "..";
}


// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initGame);

document
  .querySelector('.story-list')
  .addEventListener('click', delButtonHandler);
