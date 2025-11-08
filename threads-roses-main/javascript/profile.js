
const tabButtons = document.querySelectorAll('.tabBtn');
const tabPanels = document.querySelectorAll('.tabPanel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    
    button.classList.add('active');

   
    const targetTab = button.getAttribute('data-tab');
    const targetPanel = document.getElementById(targetTab);
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});