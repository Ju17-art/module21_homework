const page = document.getElementById("page");
const limit = document.getElementById("limit");
const button = document.getElementById("button");
const errorDiv = document.getElementById("error");
const gallery = document.getElementById("gallery");

function clearGallery() {
  gallery.innerHTML = "";
}

button.onclick = function () {
  const pageNum = Number(page.value);
  const limitNum = Number(limit.value);

  errorDiv.innerHTML = "";
  clearGallery();

  if ((pageNum < 1 || pageNum > 10) && (limitNum < 1 || limitNum > 10)) {
    errorDiv.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    return;
  }
  if (pageNum < 1 || pageNum > 10) {
    errorDiv.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    return;
  }
  if (limitNum < 1 || limitNum > 10) {
    errorDiv.innerHTML = "Лимит вне диапазона от 1 до 10";
    return;
  }

  gallery.innerHTML = "Загрузка...";

  fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${pageNum}&_limit=${limitNum}`,
  )
    .then((response) => response.json())
    .then((data) => {
      gallery.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        const img = document.createElement("img");
        img.src = data[i].thumbnailUrl;
        gallery.appendChild(img);
      }
      localStorage.setItem("lastImages", JSON.stringify(data));
    });
};

const saved = localStorage.getItem("lastImages");
if (saved) {
  const data = JSON.parse(saved);
  gallery.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    img.src = data[i].thumbnailUrl;
    gallery.appendChild(img);
  }
}
