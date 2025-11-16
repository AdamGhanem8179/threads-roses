const tabButtons = document.querySelectorAll('.tabBtn');// 3am yfatesh 3a tabBtn w ya3ti tabButtons bi js
const tabPanels = document.querySelectorAll('.tabPanel');//same as above

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    tabButtons.forEach(btn => btn.classList.remove('active'));//3am ya3mel reset after a refresh aw when tyou visit any other page
    tabPanels.forEach(panel => panel.classList.remove('active'));//same as above 
  
    button.classList.add('active');
    document.getElementById(button.getAttribute('data-tab'))?.classList.add('active');//nafs l if bi c++ la yhot li nkabas active w ytafe l tene
  });
});