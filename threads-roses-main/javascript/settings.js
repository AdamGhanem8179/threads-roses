const settingsTabs = document.querySelectorAll('.settingsTab');//hone 3am yfatesh 3al tag settingsTab bil html w ya3ti bil js la settingsTabs
const settingsSections = document.querySelectorAll('.settingsSection');//same as above

settingsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    settingsTabs.forEach(t => t.classList.remove('active'));//hayde wili tahta 3am ta3mel reset lal ui whenever you leave la yerja3 3a awwal wahde
    settingsSections.forEach(s => s.classList.remove('active'));//same as above
    tab.classList.add('active');// hayde 3am ya3mel active button bi farjeeke l content te3o
    document.getElementById(tab.getAttribute('data-section'))?.classList.add('active');
  });
});