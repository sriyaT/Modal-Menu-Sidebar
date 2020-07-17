const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const submit = document.getElementById('submit-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const password2Input = document.getElementById('password2');

// Toggle Nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

// Show Modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide Modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide Modal
submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    nameInput.value.length > 0 &&
    emailInput.value.length > 0 &&
    passwordInput.value.length > 0 &&
    password2Input.value.length > 0
  ) {
    modal.classList.remove('show-modal');
  }
});

// Hide modal on outside click
window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
