<script>
  export let location;

  const moveTohome = ()=>{
    window.location.hash = '/'
  }
</script>

<footer>
  <div class="foorter-block">
    <button class="footer-icons" on:click={moveTohome}>
      <div class="footer-icons__imgs">
        {#if location === "home"}
          <img src="assets/home.svg" alt="home">
        {:else}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        {/if}
      </div>
      <div>홈</div>
    </button>
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
      <div>나의 당근</div>
    </div>
  </div>
</footer>