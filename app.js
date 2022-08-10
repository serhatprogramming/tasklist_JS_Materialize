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
  // Add task event
  form.addEventListener("submit", addTask);
  // Remove Task
  taskList.addEventListener("click", removeTask);
  // Clear Tasks
  clrBtn.addEventListener("click", clearTasks);
  // Filter events
  filter.addEventListener("keyup", filterTasks);
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  } else {
    // Create li element
    const listItem = document.createElement("li");
    // Add class
    listItem.className = "collection-item";
    // insert the text into li
    listItem.innerText = taskInput.value;
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

    // clear input
    taskInput.value = "";
  }

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

// Clear Tasks
function clearTasks(e) {
  while (taskList.firstElementChild) {
    taskList.firstElementChild.remove();
  }

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
