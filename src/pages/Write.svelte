<script>
import Footer from "../components/footer.svelte";
import { getDatabase, ref, push } from "firebase/database";
import { 
  getStorage,
  ref as refImage,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

let title;
let price;
let description;
let place;
let files;

const storage = getStorage();
const db = getDatabase();

async function writeUserData(imgUrl) {
  push(ref(db, 'items/'), {
    title,
    price,
    description,
    place,
    insertAt: new Date().getTime(),
    imgUrl
  });

  window.location.hash = "/";
}

const uploadFile = async () => {
  const file = files[0];
  const name = file.name;
  const imgRef = refImage(storage, name);
  const res = await uploadBytes(imgRef, file);
  const url = await getDownloadURL(imgRef);
  
  return url;
}

const handleSubmit = async () => {
  const url = await uploadFile();
  writeUserData(url);
}

</script>


<form id="write-form" on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="image">이미지</label>
    <input type="file" bind:files id="image" name="image">
  </div>

  <div>
    <label for="title">제목</label>
    <input type="text" id="title" name="title" bind:value={title}>
  </div>

  <div>
    <label for="price">가격</label>
    <input type="number" id="price" name="price" bind:value={price}>
  </div>

  <div>
    <label for="description">설명</label>
    <input type="text" id="description" name="description" bind:value={description}>
  </div>

  <div>
    <label for="place">장소</label>
    <input type="text" id="place" name="place" bind:value={place}>
  </div>

  <div>
    <button class="submit-btn" type="submit">제출</button>
  </div>
</form>

<Footer />

<style>
  .submit-btn {
    border-radius : 5px;
    background : tomato;
    font-size: 20px;
    margin : 10px;
  }
</style>