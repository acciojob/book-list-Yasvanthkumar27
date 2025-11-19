const form = document.getElementById("book-form");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const list = document.getElementById("book-list");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!title.value || !author.value || !isbn.value) return;

  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.textContent = title.value;

  const td2 = document.createElement("td");
  td2.textContent = author.value;

  const td3 = document.createElement("td");
  td3.textContent = isbn.value;

  const td4 = document.createElement("td");
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "delete";   // REQUIRED BY TEST
  td4.appendChild(del);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  list.appendChild(tr);

  title.value = "";
  author.value = "";
  isbn.value = "";
});

list.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
