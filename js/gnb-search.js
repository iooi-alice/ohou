const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const deleteAllButton = document.querySelector('.search-history-header button');
const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button');

function closeGnbSearchHistory() {
  // 외부 클릭 시 is-active 클래스 삭제(검색 기록 창 닫힘)
  gnbSearchHistory.classList.remove('is-active');
  // window에 추가된 click 이벤트 리스너 제거(더 이상 필요하지 않음)
  window.removeEventListener('click', closeGnbSearchHistoryClickOutSide);
}

// ------------💡 히스토리 열기/닫기 ------------
function closeGnbSearchHistoryClickOutSide(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory();
  }
}

function openGnbSearchHistory() {
  if (!gnbSearchHistoryList.childElementCount) return;
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryClickOutSide);
  }
  gnbSearchHistory.classList.add('is-active');
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

// ------------💡 히스토리 전제 삭제 ------------
function deleteAllSearchHistory() {
  gnbSearchHistoryList.innerHTML = '';
  closeGnbSearchHistory();
}

deleteAllButton.addEventListener('click', deleteAllSearchHistory);

// ------------💡 히스토리 개별 삭제 ------------
function deleteSearchHistoryItem(e) {
  e.stopPropagation();
  const li = this.parentNode;
  gnbSearchHistoryList.removeChild(li);

  if (!gnbSearchHistoryList.childElementCount) {
    closeGnbSearchHistory();
  }
}

deleteButtonList.forEach((deleteButton) => {
  deleteButton.addEventListener('click', deleteSearchHistoryItem);
});
