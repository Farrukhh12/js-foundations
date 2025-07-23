<<<<<<< HEAD
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
=======
let books = [];

function addBook() {
  const input = document.getElementById("book-input").value;
  books.push(input); // Add the book to the array

  const list = document.getElementById("book-list");
  list.innerHTML = ""; // Clear old list before rendering again

  for (let i = 0; i < books.length; i++) {
    list.innerHTML += `<li>${books[i]}</li>`; // Append each item directly

  }

  // ✅ Clear the input field
  document.getElementById("book-input").value = "";
}
>>>>>>> b67fd5244552c694bbe13ff561a67b697ed9a469
