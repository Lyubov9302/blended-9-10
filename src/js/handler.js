


// логіка при сабміті

import { renderTaskList } from "./render-tasks";

const tasks = [];

export function onHeaderFormSubmit(evt) {
evt.preventDefault();

const {taskName, taskDescription} = evt.target.elements;
const taskNameValue = taskName.value.trim();
const taskDescriptionValue = taskDescription.value.trim();

if (taskNameValue === '' || taskDescriptionValue === '') {
    alert('Всі поял мають бути заповнені');
    return;
    
}

const task = {
    taskName: taskNameValue,
    taskDescription: taskDescriptionValue,
};

tasks.push(task);

renderTaskList(tasks);
evt.target.reset();
}

