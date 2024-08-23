const searchButton = document.querySelector('.gnb-icon-button.is-search');
const searchModal = document.querySelector('.search-modal');
const searchOverlay = document.querySelector('.overlay');
const closeButton = searchModal.querySelector('.search-modal-form .btn-ghost');

function openSearchModal() {
  searchModal.classList.add('is-active');
  searchOverlay.classList.add('is-active');
}

searchButton.addEventListener('click', openSearchModal);

function closeSearchModal() {
  searchModal.classList.remove('is-active');
}

closeButton.addEventListener('click', closeSearchModal);
