# ohou

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button class="lg-hidden gnb-icon-button" type="button" aria-label="검색창 열기 버튼">
    <i class="ic-search"></i>
  </button>

  <a class="gnb-icon-button is-cart" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
  </a>
  <div class="sm-hidden gnb-auth">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button class="lg-hidden gnb-icon-button" type="button" aria-label="검색창 열기 버튼">
    <i class="ic-search"></i>
  </button>

  <a class="sm-hidden gnb-icon-button" href="/" aria-label="스크랩북 페이지로 이동">
    <i class="ic-bookmark"></i>
  </a>

  <a class="sm-hidden gnb-icon-button" href="/" aria-label="내 소식 페이지로 이동">
    <i class="ic-bell"></i>
  </a>

  <a class="gnb-icon-button is-cart" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button class="sm-hidden gnb-avatar-button" type="button" aria-label="마이메뉴 열기 버튼">
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.webp" alt="사용자 프로필 이미지" />
    </div>
  </button>
</div>
```
