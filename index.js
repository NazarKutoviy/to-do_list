// 1
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("newTask");
  const taskList = document.getElementById("taskList");

  taskForm.addEventListener("submit", (event) => {
      event.preventDefault(); 

      const taskText = taskInput.value.trim();
      if (taskText === "") return;

 
      const li = document.createElement("li");
      li.innerHTML = `
          <input type="checkbox" class="task-checkbox">
          <span>${taskText}</span>
          <button class="delete-btn">Видалити</button>
      `;

      taskList.appendChild(li);
      taskInput.value = "";
  });

  taskList.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
          event.target.parentElement.remove();
      }

      if (event.target.classList.contains("task-checkbox")) {
          const taskItem = event.target.nextElementSibling;
          taskItem.classList.toggle("completed", event.target.checked);
      }
  });
});
