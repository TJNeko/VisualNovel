
document.addEventListener('DOMContentLoaded', () => {
    let paragraphs = document.querySelectorAll(".paragraph");
    let sentences = Array.from(paragraphs).map(paragraph => {
        return {
            element: paragraph,
            story: paragraph.textContent,
            hasChoice: paragraph.getAttribute("data-choice")
        };
    
});
function DelayNode(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function storyChoice(){  

    try{
        for(let sentenceObj of sentences){
            console.log("sentence: " + sentenceObj.story);
            console.log("hasChoice: " + sentenceObj.hasChoice);
        // for(let i=0; i<5;i++){
            await DelayNode(1000);
        }

    }catch(err){
        console.error(err);
    }

}

storyChoice();

function handleParagraphClick(event){
    let paragraph = event.currentTarget;
    let story = paragraph.textContent;
    let hasChoice = paragraph.getAttribute('data-choice');
    console.log(`Paragraph clicked: ${story}`);
    console.log(`Has choice: ${hasChoice}`);
    // Add your logic here based on the story and hasChoice value
}
  // Add event listeners to each paragraph
  paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', handleParagraphClick);
});
});
// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);