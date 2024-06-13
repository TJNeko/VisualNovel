//let stories 
let currentIndex = 0;

document.addEventListener('DOMContentLoaded', async () => {
    const storySection = document.querySelector(".story-section");

    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };
      
      try{
        //get introduction and send to the page
      const data = await fetch('/api/story', options);
      if(!data.ok){
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const story = await data.json();
    
      console.log("fetched stories: " + story.story);
      //displaying first story
      storySection.innerHTML='';
      const paragraph = document.createElement('p');
      paragraph.className = 'paragraph';
      paragraph.setAttribute('data-choice', story.has_choice);
      paragraph.textContent = story.story;
      storySection.appendChild(paragraph);

      addEventListenersToParagraphs();
  } catch (error) {
    console.error('Fetch error: ', error);
  }
});

/* is above screw, delete above and use this
document.addEventListener('DOMContentLoaded', async () => {
    const storySection = document.querySelector(".story-section");

    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      };
      
      try{
      const data = await fetch('/api/story', options);
      if(!data.ok){
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      const stories = await data.json();
    
      console.log("fetched stories: " + stories[0].story);
      //displaying first story
      storySection.innerHTML='';
      const paragraph = document.createElement('p');
      paragraph.className = 'paragraph';
      paragraph.setAttribute('data-choice', stories[0].has_choice);
      paragraph.textContent = stories[0].story;
      storySection.appendChild(paragraph);

      addEventListenersToParagraphs();
  } catch (error) {
    console.error('Fetch error: ', error);
  }
});
*/
function storyDevelopment(story){

    if(story.id===0){
        console.log("prolog and for name input:");
    }
    if(story.has_choice){

    }
}



function addEventListenersToParagraphs(){
    const paragraphs = document.querySelector(".paragraph");
    paragraphs.addEventListener('click',handleParagraphClick);

}
function handleParagraphClick(event){
    let paragraph = event.currentTarget;
    let story = paragraph.textContent;
    let hasChoice = paragraph.getAttribute('data-choice');
    console.log(`Paragraph clicked: ${story}`);
    console.log(`Has choice: ${hasChoice}`);
}

