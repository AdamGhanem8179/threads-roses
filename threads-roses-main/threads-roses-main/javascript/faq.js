document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faqItem').forEach(item => {//for loop la kil wahad ismo faqitem bi html
    item.querySelector('.faqQuestion').addEventListener('click', () => {//la ysir yenkabas l button always listening
      const isActive = item.classList.contains('active');//to check if the button is pressed aw la2 isactive true
      document.querySelectorAll('.faqItem').forEach(other => other.classList.remove('active'));//for loop la tsheel kil shia ctive illa l true
      if (!isActive) item.classList.add('active');//iza closed it opens it
    });
  });
});