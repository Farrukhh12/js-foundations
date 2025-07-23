
const tasks = [
  "Wash the dishes",
  "Complete JavaScript homework",
  "Buy groceries",
  "Go to gym",
  "Pay bills",
  "Call mom",
  "Read a book"
];

const searchInput = document.getElementById("search");
const taskList = document.getElementById("task-list");

// Display tasks initially
function displayTasks(taskArray) {
  taskList.innerHTML = ""; // clear old tasks

  taskArray.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

// Initial render
displayTasks(tasks);

// Add live search filter
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  const filtered = tasks.filter((task) =>
    task.toLowerCase().includes(searchTerm)
  );

  displayTasks(filtered);
});


// Dark mode feature coming soon