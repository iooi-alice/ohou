const reviewLikeButton = document.querySelectorAll('.review-card-footer button');

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';

function updateButtonText(button, isLiked) {
  if (isLiked) {
    button.innerHTML = NOT_HELPFUL;
  } else {
    // 처음 누를 때 상태: false
    button.innerHTML = HELPFUL;
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('ic-check');
    checkIcon.setAttribute('aria-hidden', true);
    button.prepend(checkIcon);
  }
}

function updateHelpfulnessCount(countSpan, newCount) {
  countSpan.innerHTML = newCount.toLocaleString();
}

function toggleReviewLikeButton() {
  const isLiked = this.classList.contains('btn-primary');
  const textEle = this.nextElementSibling;
  const reviewCardFooter = this.parentNode;

  updateButtonText(this, isLiked);

  if (textEle) {
    const countSpan = textEle.querySelector('span');
    const currentCount = Number(countSpan.innerHTML.replace(',', ''));
    let newCount = isLiked ? currentCount - 1 : currentCount + 1;

    if (isLiked) {
      if (newCount === 0) {
        reviewCardFooter.removeChild(textEle);
      }
    } else {
      updateHelpfulnessCount(countSpan, newCount);
    }
    updateHelpfulnessCount(countSpan, newCount);
  } else {
    // 도움이 되었다는 text가 없는 경우
    if (!isLiked) {
      // 새롭게 text 생성하기
      const newTextEle = document.createElement('p');
      newTextEle.innerHTML = '<strong><span>1</span>명</strong>에게 도움이 되었습니다.';
      reviewCardFooter.appendChild(newTextEle);
    }
  }

  this.classList.toggle('btn-primary');
  this.classList.toggle('btn-outlined');
}

reviewLikeButton.forEach((button) => {
  button.addEventListener('click', toggleReviewLikeButton);
});
