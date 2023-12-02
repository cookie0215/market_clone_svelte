// form에서 데이터가 전송이 되었을 때, 서버쪽으로 보내주는 코드

const form = document.getElementById('write-form');

const handleSubmitForm = async (event) => {
  event.preventDefault();

  const body = new FormData(form);
  body.append('insertAt', new Date().getTime());

  try {
    const res = await fetch('/items', {
      method: 'POST',
      body,
    });

    const data = await res.json();
    if (data === 200) {
      window.location.pathname = "/";
    }
  } catch (err) {
    console.error(err);
  }
};

form.addEventListener('submit', handleSubmitForm);