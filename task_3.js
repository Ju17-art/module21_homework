function formatDateTime(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const userName = localStorage.getItem("userName");
const lastVisit = localStorage.getItem("lastVisit");

const currentDate = new Date();
const formattedCurrentDate = formatDateTime(currentDate);

if (userName === null || lastVisit === null) {
  const name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");

  if (name !== null && name.trim() !== "") {
    localStorage.setItem("userName", name.trim());
    localStorage.setItem("lastVisit", formattedCurrentDate);

    console.log(`Первый визит пользователя: ${name.trim()}. Данные сохранены.`);
  } else {
    alert("Вы не ввели имя. При следующем заходе мы спросим снова.");
    console.log("Пользователь не ввел имя при первом визите.");
  }
} else {
  alert(
    `Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisit}`,
  );

  localStorage.setItem("lastVisit", formattedCurrentDate);

  console.log(
    `Повторный визит пользователя: ${userName}. Дата обновлена на ${formattedCurrentDate}`,
  );
}
