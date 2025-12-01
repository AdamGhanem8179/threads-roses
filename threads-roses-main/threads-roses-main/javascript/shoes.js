const modalOverlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.getElementById('closeBtn');

const shoesCards = document.querySelectorAll('.shoescard');

shoesCards.forEach(card => {
  card.addEventListener('click', function() {
    modalImage.src = this.querySelector('img').src;
    modalImage.alt = this.querySelector('img').alt;

    modalTitle.textContent = this.getAttribute('datatitle');
    modalPrice.textContent = this.getAttribute('dataprice');
    modalDescription.textContent = this.getAttribute('datadescription');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});
