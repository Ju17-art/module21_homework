const button = document.getElementById("fetchButton");
const input = document.getElementById("userId");
const resultDiv = document.getElementById("result");

button.addEventListener("click", async () => {
  const userId = parseInt(input.value);

  if (isNaN(userId) || userId < 1 || userId > 10) {
    resultDiv.innerHTML =
      '<div class="error">Пользователь с указанным id не найден</div>';
    return;
  }

  resultDiv.innerHTML = "Загрузка...";

  const url = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.length === 0 || !Array.isArray(data)) {
      resultDiv.innerHTML =
        '<div class="error">Пользователь с указанным id не найден</div>';
      return;
    }

    const tasksHTML = `
            <div class="tasks-list">
                <h2>Список задач (${data.length})</h2>
                <ul>
                    ${data
                      .map(
                        (task) => `
                        <li class="${task.completed ? "completed" : ""}">
                            ${task.title}
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
        `;

    resultDiv.innerHTML = tasksHTML;
  } catch (error) {
    resultDiv.innerHTML =
      '<div class="error">Пользователь с указанным id не найден</div>';
  }
});
