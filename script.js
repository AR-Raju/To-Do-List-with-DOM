//first of all create variable for the items
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let toDoUL = document.querySelector("#items");
let completeUL = document.querySelector(".complete-list ul");

//function
let createTask = function (task) {
  let listItem = document.createElement("li");

  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.className = "list-group-item";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  toDoUL.appendChild(listItem);
  newTask.value = "";
  // bind the list item to the complete list
  bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";

  listItem.appendChild(deleteBtn);
  console.log(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUL.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};

let deleteTask = function () {
  let listItem = this.parentNode;

  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindInCompleteItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteBtn = taskItem.querySelector(".delete");
  console.log(deleteBtn);
  deleteBtn.onclick = deleteButtonClick;
};

for (let i = 0; i < toDoUL.children.length; i++) {
  bindInCompleteItems(toDoUL.children[i], completeTask);
}

for (let i = 0; i < completeUL.children.length; i++) {
  bindCompleteItems(completeUL.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
