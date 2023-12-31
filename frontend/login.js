const form = document.getElementById("login-form");

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password)

  const res = await fetch("/login", {
    method: "POST",
    body: formData
  });

  const data = await res.json();
  const accessToken = data.access_token;
  window.localStorage.setItem('token', accessToken);

  window.location.pathname = "/";

  // // 상태값이 서버에서 응답하는 값(200)과 일치하면 (res.status는 main.py파일의 return 200값과 관련 없다~! - 서버에서 자동으로 내려주는 코드로 판단)
  // if (res.status === 200) {
  //   alert("로그인 성공했습니다!");
  //   window.location.pathname = "/";
  // } else if (res.status === 401) {
  //   alert("id 또는 password가 틀렸습니다.")
  // }



  const btn = document.createElement("button");
  btn.innerText = "상품가져오기";

  btn.addEventListener('click', async () => {
    const res = await fetch('/items', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const data = await res.json();
    console.log(data);
  })

  infoDiv.appendChild(btn);
};

form.addEventListener("submit", handleSubmit);