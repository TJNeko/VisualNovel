const textBox = document.getElementById("user-name"); 
const button = document.getElementById("name-button");
const nextButton1 = document.getElementById("next-button1");
const div1 = document.getElementById("first-section");
const div2 = document.getElementById("second-section");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const currentStory = document.getElementById("current-story")
const isDead = currentStory?.getAttribute("dead");

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

nextButton1?.addEventListener("click",function(){
  window.location.href = '/story/3';
});

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