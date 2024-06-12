
let sentence = document.querySelector(".paragraph").value;

function DelayNode(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function storyChoice(){  
    console.log("sentence : " + sentence);
    try{
        for(let i=0; i<5;i++){
            await DelayNode(1000);
        }
    }catch(err){
        console.error(err);
    }

}

storyChoice();
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