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
