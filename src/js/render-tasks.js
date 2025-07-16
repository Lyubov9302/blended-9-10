import { refs } from "./refs";

// функції для рендеру (малювання, очистка)
export function renderTaskList(tasks) {
const markup = tasks
.map(
    ({taskName, taskDescription}) => `  
<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>taskName</h3>
      <p>taskDescription</p>
  </li>
  `).join('');
    refs.tasksList.innerHTML = markup;
}