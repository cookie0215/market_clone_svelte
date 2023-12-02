<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  setInterval(() => {
    min = min + 1 
  }, 1000);
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="chart-bar" />
      <img src="assets/wifi.svg" alt="wifi" />
      <img src="assets/battery-50.svg" alt="battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div>역삼1동</div>
      <img src="assets/arrow-down.svg" alt="arrow-down">
    </div>
    <div class="mene-bar__icons">
      <img src="assets/search.svg" alt="search">
      <img src="assets/menu.svg" alt="menu">
      <img src="assets/alert.svg" alt="alert">
    </div>
  </div>
</header>

<main>
  <!-- <div class="item-list">
    <div class="item-list__img">
      <img src="assets/building.jpg" alt="building">
    </div>
    <div class="item-list__info">
      <div class="itme-list__info-title">게이밍 PC 팔아요</div>
      <div class="item-list__info-meta">역삼동 19초 전</div>
      <div class="item-list__info-price">100만원</div>
    </div>
  </div>
  -->
  <a class="write-btn" href="#/write"> + 글쓰기</a>
</main>

<footer>
  <div class="foorter-block">
    <div class="footer-icons">
      <div class="footer-icons__imgs">
        <img src="assets/home.svg" alt="home">
      </div>
      <div>홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__imgs">
        <img src="assets/docs.svg" alt="docs">
      </div>
      <div>동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__imgs">
        <img src="assets/location.svg" alt="location">
      </div>
      <div>내근처</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__imgs">
        <img src="assets/chat.svg" alt="chat">
      </div>
      <div>채팅</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__imgs">
        <img src="assets/user.svg" alt="user">
      </div>
      <div>나의당근</div>
    </div>
  </div>
</footer>


<!-- 화면이 특정영역 이상으로 커지면 화면을 줄여달라는 메세지 띄우기  -->
<div class="media-info-msg">
  화면 사이즈를 줄여주세요~
</div>