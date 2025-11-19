const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const listBody = document.getElementById("book-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) return;

  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = title;

  const td2 = document.createElement("td");
  td2.textContent = author;

  const td3 = document.createElement("td");
  td3.textContent = isbn;

  const td4 = document.createElement("td");
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete";  // REQUIRED BY TEST
  td4.appendChild(delBtn);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  listBody.appendChild(tr);

  // reset fields
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

// DELETE ROW — test expects .delete button
listBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
