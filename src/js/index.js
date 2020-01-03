const element = document.getElementById('one');
const clost_button = document.getElementById('clost');

clost_button.addEventListener("click", () => {
  console.log('click'); 
  element.style.display='none'
});

