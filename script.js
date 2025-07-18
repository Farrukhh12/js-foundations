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