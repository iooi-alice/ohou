const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

function closeGnbSearchHistory(e) {
  // 5. SearchHistory 컴포넌트 외부를 클릭했는지 확인
  if (!gnbSearch.contains(e.target)) {
    // 6. 외부 클릭 시 is-active 클래스 삭제(검색 기록 창 닫힘)
    gnbSearchHistory.classList.remove('is-active');
    // 7. window에 추가된 click 이벤트 리스너 제거(더 이상 필요하지 않음)
    window.removeEventListener(closeGnbSearchHistory);
  }
}

// 2. SearchHistory 여는 함수(검색 입력 필드가 포커스될 때 실행됨)
// 📌 헷갈리지 않기 : 일단 감지를 하게 만든 후 is-active 클래스를 적용해서 열게하는 것
function openGnbSearchHistory() {
  if (!gnbSearchHistory.classList.contains('is-active')) {
    // 3. is-active 클래스가 없는 경우 -> window에 click 이벤트 리스너 추가(외부 클릭 감지 시작)
    window.addEventListener('click', closeGnbSearchHistory);
  }
  // 4. 검색 기록 창이 열리도록 is-active 클래스 추가
  gnbSearchHistory.classList.add('is-active');
}

// 1. 검색 입력 필드가 포커스되면 openGnbSearchHistory 함수 실행
gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
