<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem("token", token);
    } catch(error) {
        console.error(error);
    };
  }
</script>

<div>
  {#if $user$}
  <div class="login-info">{$user$?.displayName}님이 로그인 되었습니다.</div>
  {/if}
  <h1>로그인</h1>
  <button class="login-btn" on:click={loginWithGoogle}>
    <div>💛</div>
    <div>Google로 시작하기</div>
  </button>
</div>

<style>
  .login-info {
    font-size : 18px;
    margin : 20px;
    color: #f00c5e;
  }
  h1 {
    font-size: 20px;
    margin : 20px;
  }
  .login-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color : "white";
    border : 1px solid black;
    border-radius: 5px;
    padding: 15px;
    margin : 20px;
  }
</style>