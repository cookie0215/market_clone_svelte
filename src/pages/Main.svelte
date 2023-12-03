<script>
  import {onMount} from "svelte";
  import Footer from "../components/footer.svelte";
  import { getDatabase, ref, onValue } from "firebase/database";
  
  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  // 반응형 변수
  $: items = [];

  const calcTime = (timestamp) => {
    const currentTime = new Date().getTime() - 9 * 60 * 60 * 1000;
    const passedTime = new Date(currentTime - timestamp);

    const hour = passedTime.getHours();
    const mitute = passedTime.getMinutes();
    const second = passedTime.getSeconds();

    if (hour > 0) {
      return `${hour}시간 전`
    } else if (mitute > 0) {
      return `${mitute}분 전`
    } else if (second > 0) {
      return `${second}초 전`
    } else {
      return "방금 전";
    }
  }



  setInterval(() => {
    min = min + 1 
  }, 1000);


  const db = getDatabase();
  const itemsRef = ref(db, "items/");

  onMount(()=>{
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data).reverse();
    });
  })
  
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


{#each items as item}
<div class="item-list">
  <div class="item-list__img">
    <img src={item.imgUrl} alt={item.title}>
  </div>
  <div class="item-list__info">
    <div class="itme-list__info-title">{item.title}</div>
    <div class="item-list__info-meta">{item.place} {calcTime(item.insertAt)}</div>
    <div class="item-list__info-price">{item.price}</div>
  </div>
</div>
{/each}
  <a class="write-btn" href="#/write"> + 글쓰기</a>
</main>

<Footer location="home"/>

<!-- 화면이 특정영역 이상으로 커지면 화면을 줄여달라는 메세지 띄우기  -->
<div class="media-info-msg">
  화면 사이즈를 줄여주세요~
</div>