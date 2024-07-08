'use strict';

// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModel = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add event for each buttons
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

// Events
btnCloseModel.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Global events
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
