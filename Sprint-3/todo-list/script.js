// Get elements
const todoList = document.querySelector("#todo-list");
const addBtn = document.querySelector(".btn");
const input = document.querySelector("#todoInput");
const removeCompletedBtn = document.querySelector("#remove-all-completed");

// ---------- Helper to create a todo ----------
function createTodo(text) {
  const li = document.createElement("li");
  li.innerText = text;

  // Tick icon
  const tick = document.createElement("i");
  tick.classList.add("fa", "fa-check");

  tick.addEventListener("click", () => {
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "";
    } else {
      li.style.textDecoration = "line-through";
    }
  });

  // Trash icon
  const trash = document.createElement("i");
  trash.classList.add("fa", "fa-trash");

  trash.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(tick);
  li.appendChild(trash);

  return li;
}

// Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
