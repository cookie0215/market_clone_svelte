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


const renaderData = (data) => {
  const main = document.querySelector("main");

  data.reverse().forEach(async (obj) => {
    const itemListDiv = document.createElement("div");
    itemListDiv.className = "item-list";

    const itemListImgDiv = document.createElement("div");
    itemListImgDiv.className = "item-list__img";

    const img = document.createElement("img");
    const res = await fetch(`images/${obj.id}`);
    const blobType = await res.blob();
    const url = URL.createObjectURL(blobType);
    img.src = url;


    const itemListInfoDiv = document.createElement("div");
    itemListInfoDiv.className = "item-list__info";

    const itmeListInfoTitleDiv = document.createElement("div");
    itmeListInfoTitleDiv.className = "itme-list__info-title";
    itmeListInfoTitleDiv.innerText = obj.title;

    const itmeListInfoMetaDiv = document.createElement("div");
    itmeListInfoMetaDiv.className = "itme-list__info-meta";
    itmeListInfoMetaDiv.innerText = obj.place + " " + calcTime(obj.insertAt);

    const itmeListInfoPriceDiv = document.createElement("div");
    itmeListInfoPriceDiv.className = "itme-list__info-price";
    itmeListInfoPriceDiv.innerText = obj.price;


    itemListImgDiv.appendChild(img)
    itemListDiv.appendChild(itemListImgDiv)

    itemListInfoDiv.appendChild(itmeListInfoTitleDiv)
    itemListInfoDiv.appendChild(itmeListInfoMetaDiv)
    itemListInfoDiv.appendChild(itmeListInfoPriceDiv)
    itemListDiv.appendChild(itemListInfoDiv)

    main.appendChild(itemListDiv)
  });
}

// get 요청으로 items들을 읽어올 수 있도록(조회하도록) 구현하기
const fetchList = async () => {
  const accessToken = window.localStorage.getItem("token");
  const res = await fetch('/items', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  if (res.status === 401) {
    alert("로그인이 필요합니다.");
    window.location.pathname = "/login.html";
    return;
  }

  const data = await res.json();
  renaderData(data);
}

fetchList();