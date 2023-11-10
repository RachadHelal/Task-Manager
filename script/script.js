function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value) {
    let li = document.createElement("li");
    li.innerHTML = `
            <span id="text-input" class='text-input'>${taskInput.value}</span>
            <div class=btn-container'>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
            <button id="toggle" class="done" onclick="markDone(this)">Completed</button>
            </div>
        `;
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a value");
  }
}

function deleteTask(button) {
  let divClass = button.parentNode;
  divClass.parentNode.remove();
}

function editTask(button) {
  let divClass = button.parentNode;
  let span = divClass.parentNode;
  let taskText = span.querySelector("span").innerText;
  let newTaskText = prompt("Edit task:", taskText);

  if (newTaskText !== null) {
    span.querySelector("span").innerText = newTaskText;
  }
}

function markDone(button) {
  button.style.backgroundColor = "red";
}
