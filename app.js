// Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clrBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Call Load all event listeners
loadEventListeners();

// Declare loadEventListeners
function loadEventListeners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove Task
  taskList.addEventListener("click", removeTask);
  // Clear Tasks
  clrBtn.addEventListener("click", clearTasks);
  // Filter events
  filter.addEventListener("keyup", filterTasks);
}

// Get Tasks from local storage and display them.
function getTasks() {
  let tasks = getLSItems();
  tasks.forEach(function (task) {
    addOneItem(task);
  });
}

// add one task to ul
function addOneItem(item) {
  // Create li element
  const listItem = document.createElement("li");
  // Add class
  listItem.className = "collection-item";
  // insert the text into li
  listItem.innerText = item;
  // create new link element
  const link = document.createElement("a");
  // Add delete class to link
  link.className = "delete-item secondary-content";
  // add icon to link
  link.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  // append the link inside listItem
  listItem.appendChild(link);
  // Append li to ul
  taskList.appendChild(listItem);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  } else {
    addOneItem(taskInput.value);
    // add to local storage
    addTaskLS(taskInput.value);
    // clear input
    taskInput.value = "";
  }

  e.preventDefault();
}

// Add task to local storage
function addTaskLS(task) {
  let tasks = getLSItems();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// remove task from LS
function removeTaskLS(rmTask) {
  let tasks = getLSItems();
  tasks = tasks.filter((task) => task !== rmTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    removeTaskLS(e.target.parentElement.parentElement.innerText);
    e.target.parentElement.parentElement.remove();
  }
}

// get Local storage items into an array
function getLSItems() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasks;
}

// Clear Tasks
function clearTasks(e) {
  while (taskList.firstElementChild) {
    taskList.firstElementChild.remove();
  }
  localStorage.clear();
  e.preventDefault();
}

// Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    if (task.innerText.toLowerCase().indexOf(text) == -1)
      task.style.display = "none";
    else task.style.display = "block";
  });

  console.log(text);
}
