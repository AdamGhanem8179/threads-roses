// Float in animation on page load
document.addEventListener('DOMContentLoaded', () => {
  const clouds = document.querySelectorAll('.faqCloud');
  
  clouds.forEach((cloud, index) => {
    setTimeout(() => {
      cloud.classList.add('float-in');
    }, index * 200);
  });
  
  // Toggle FAQ answers
  const faqItems = document.querySelectorAll('.faqItem');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faqQuestion');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
  
});
