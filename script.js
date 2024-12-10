const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const completedCount = document.getElementById("completed-count");
const totalCount = document.getElementById("total-count");

let totalTasks = 0;
let completedTasks = 0;

addButton.addEventListener("click", addTodo);

function addTodo() {
  const todoText = input.value.trim();
  if (!todoText) return;

  totalTasks++;

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const span = document.createElement("span");
  span.textContent = todoText;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");
  completeBtn.addEventListener("click", () => toggleComplete(todoItem));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => deleteTodo(todoItem));

  todoItem.append(span, completeBtn, deleteBtn);
  todoList.appendChild(todoItem);

  input.value = "";
  updateCounts();
}

function toggleComplete(todoItem) {
  todoItem.classList.toggle("completed");
  completedTasks = document.querySelectorAll(".todo-item.completed").length;
  updateCounts();
}

function deleteTodo(todoItem) {
  if (todoItem.classList.contains("completed")) {
    completedTasks--;
  }
  totalTasks--;
  todoItem.remove();
  updateCounts();
}

function updateCounts() {
  completedCount.textContent = `Completed: ${completedTasks}`;
  totalCount.textContent = `Total Tasks: ${totalTasks}`;
}