// Создаем Promise
const randomNumberPromise = new Promise((resolve, reject) => {
  // Задержка в 3 секунды с помощью setTimeout
  setTimeout(() => {
    // Генерируем случайное целое число от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Проверяем четность числа
    if (randomNumber % 2 === 0) {
      // Четное число - успешное выполнение
      resolve(randomNumber);
    } else {
      // Нечетное число - ошибка
      reject(randomNumber);
    }
  }, 3000);
});

// Обрабатываем результат Promise
randomNumberPromise
  .then((number) => {
    console.log(`Завершено успешно. Сгенерированное число — ${number}`);
  })
  .catch((number) => {
    console.log(`Завершено с ошибкой. Сгенерированное число — ${number}`);
  });
