const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
function addTask() {
  if (input.value === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    input.value = "";
    saveData();
  }
}

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }     
});

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("tasks");
}
showTask();