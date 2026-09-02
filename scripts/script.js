// Wisselt tussen light en dark mode
function toggleMode() { 
  const body = document.body; // pakt het body-element
  const button = document.querySelector('.Dark-Mode-Knop'); // pakt de knop

  body.classList.toggle('dark-mode'); // zet dark-mode aan of uit

  // Verander de tekst op de knop
  if (body.classList.contains('dark-mode')) {
    button.textContent = '☀️ Light mode';
  } else {
    button.textContent = '🌙 Dark mode';
  }
}

// Zoek de knop op met het id 'mijnKnop'
const knop = document.getElementById('Copyright-knop');

// Voeg een klik-event toe
knop.addEventListener('click', function() {
  alert('This could have been a e-mail guys.');
});

