const myMenu = document.querySelector('.my-menu');
const myMenuButton = document.querySelector('.my-menu-button');

function closeMyMenuOnClickOutside(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active');
    window.removeEventListener('click', closeMyMenuOnClickOutside);
  }
}

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    myMenu.classList.add('is-active');

    window.addEventListener('click', closeMyMenuOnClickOutside);
  } else {
    myMenu.classList.remove('is-active');
  }
}

myMenuButton.addEventListener('click', toggleMyMenu);
