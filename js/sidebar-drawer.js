const drawerMenuButtons = document.querySelectorAll('.drawer-menu .drawer-menu-button');

function toggleDrawerMenu() {
  // 2. 버튼의 부모인 drawer-menu 찾기
  const drawerMenu = this.parentNode;

  // 3. 클래스 is-open, is-active 추가
  drawerMenu.classList.toggle('is-open');
  drawerMenu.classList.toggle('is-active');
}

// 1. 각각의 버튼 클릭 시
drawerMenuButtons.forEach((button) => {
  button.addEventListener('click', toggleDrawerMenu);
});
