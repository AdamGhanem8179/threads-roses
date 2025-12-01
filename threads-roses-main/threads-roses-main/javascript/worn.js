const modalOverlay = document.getElementById('modalOverlay');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');//hone bit jeeb element wahde
const closeBtn = document.getElementById('closeBtn');
const wornCards = document.querySelectorAll('.worncard');//kil hol la tjeebon min html bas kil l tags so as an array

wornCards.forEach(card => {//loop la kil card
  card.addEventListener('click', function() {//listening
    modalImage.src = this.querySelector('img').src;//when clicked search for the img
    modalImage.alt = this.querySelector('img').alt;//search for the alt
    modalTitle.textContent = this.getAttribute('datatitle');// hayde wil 2 l tahta la tjeeb l text it searches for the id bil html w grab the text
    modalPrice.textContent = this.getAttribute('dataprice');
    modalDescription.textContent = this.getAttribute('datadescription');
    modalOverlay.classList.add('active');//bta3mela active bil css
    document.body.style.overflow = 'hidden';//btimna3 l scrolling
  });
});

function closeModal() {
  modalOverlay.classList.remove('active');//removes active
  document.body.style.overflow = '';//enables scrolling
}

closeBtn.addEventListener('click', closeModal);//bas tikibse l x r3mol close
document.addEventListener('keydown', e => e.key === 'Escape' && modalOverlay.classList.contains('active') && closeModal());//if u press esc on keyboard it closes