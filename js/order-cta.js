const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaButton] = orderCta.children;

const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

// Modal - open/close
function openOrderModal() {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
}

orderCtaButton.addEventListener('click', openOrderModal);

function closeOrderModal() {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
}

orderModalOverlay.addEventListener('click', closeOrderModal);

// Bookmark - toggle
function toggleBookmark() {
  const [icon, countSpan] = this.children;
  const count = Number(countSpan.innerText.replaceAll(',', ''));
  let newCount = count;

  if (this.classList.contains('is-active')) {
    icon.classList.replace('ic-bookmarkFilled', 'ic-bookmark');
    newCount -= 1;
  } else {
    icon.classList.replace('ic-bookmark', 'ic-bookmarkFilled');
    newCount += 1;
  }

  countSpan.innerText = newCount.toLocaleString();
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`);
  this.classList.toggle('is-active');
}

orderCtaBookmarkButton.addEventListener('click', toggleBookmark);
