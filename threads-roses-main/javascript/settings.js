const settingsTabs = document.querySelectorAll('.settingsTab');
const settingsSections = document.querySelectorAll('.settingsSection');

settingsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    
    settingsTabs.forEach(t => t.classList.remove('active'));
    settingsSections.forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    const targetSection = tab.getAttribute('data-section');
    const section = document.getElementById(targetSection);
    if (section) {
      section.classList.add('active');
    }
  });
});

const toggleInputs = document.querySelectorAll('.toggle input[type="checkbox"]');
toggleInputs.forEach(input => {
  input.addEventListener('change', () => {
    const label = input.closest('.toggleItem').querySelector('.toggleLabel span').textContent;
    if (input.checked) {
      console.log(`Enabled: ${label}`);
    } else {
      console.log(`Disabled: ${label}`);
    }
  });
});