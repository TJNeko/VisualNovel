

// // Function to start the game
// function initGame() {

//   displayStory("Welcome to DeadEnd the visual Novel game!");
  
//   getPlayerName();
// }

// // Function for the next button 
// function handleNextButtonClick() {
 
//   const nextStoryPart = getNextStoryPart();
//   displayStory(nextStoryPart);
// }

// // Function to display the story text on screen 
// function displayStory(storyText) {
 
//   const storyContainer = document.getElementById('storyContainer');
//   if(storyText)
//     storyContainer?.textContent = storyText;
// }

// // Function to prompt the player to enter name
// function getPlayerName() {
//   const playerName = prompt("Please enter your name:");
 
//   if (playerName) {
   
//       window.playerName = playerName;
//   }
// }

// // Function to fetch the next part of the story (can be from predefined list or object)
// function getNextStoryPart() {
  
//   // return "..";
// }

const textBox = document.getElementById("user-name"); 
const button = document.getElementById("name-button");
const nextButton = document.getElementById("next-button1");
const div1 = document.getElementById("first-section");
const div2 = document.getElementById("second-section");

if(textBox){
textBox.addEventListener("keyup", function (event) { 

    // Checking if key pressed is ENTER or not 
    // if the key pressed is ENTER 
    // click listener on button is called 
    if (event.key === 'Enter') { 
        button.click(); 
    } 
}); }

//str is name that user input. Then this user input name is appended to story[1] and send back to intro.handlebars
button?.addEventListener("click", function () { 
    let str = textBox.value; //user entered name

    //when user entered name field, story[0] will be hidden and story[1] shows
  if (div2.style.display === "none") {
      div1.style.display = "none";
      div2.style.display = "block";
      
  const nameSection = document.getElementById('name-section');
  const secondParagraph = nameSection.textContent + str + "!";
  nameSection.innerHTML = secondParagraph;

  } else {//otherwise story[0] displays
      div1.style.display = "block";
      div2.style.display = "none";
  }
}); 

nextButton?.addEventListener("click",function(){
  window.location.href = '/story/3';
});


// Initialize the game when the DOM is fully loaded
//document.addEventListener('DOMContentLoaded', initGame);
