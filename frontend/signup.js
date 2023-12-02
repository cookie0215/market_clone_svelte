const form = document.getElementById("signup-form");

// 두개의 비밀번호 값을 가져와서 서로 같은지 비교하는 로직
const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("password2");

  if (password1 === password2) {
    return true
  } else {
    return false
  }
}

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password)

  // 두개의 비밀번호가 true(일치)라면 -> 서버로 formData 전송
  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "POST",
      body: formData
    })
    alert("회원가입 성공했습니다.");
    window.location.pathname = "/login.html";
  } else {
    const errmsg = document.createElement("div");
    errmsg.innerText = "비밀번호가 같지 않습니다.";
    errmsg.style.color = "red";

    form.appendChild(errmsg);
  }


};

form.addEventListener("submit", handleSubmit);