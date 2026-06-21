import { tasks } from "./data.js";
import { renderTasks, clearInputs, fillForm, renderStatistics } from "./ui.js";
import { addTask, deleteTask, filterTasks, getStatistics, updateTask } from "./tasks.js";

const addTaskBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priorityFilter = document.getElementById("priorityFilter");
const statusFilter = document.getElementById("statusFilter");

let isEditMode = false;
let currentTaskId = null;

addTaskBtn.addEventListener("click", () => {
  const title = document.getElementById("taskTitle").value;
  const category = document.getElementById("taskCategory").value;
  const priority = document.getElementById("taskPriority").value;
  const status = document.getElementById("taskStatus").value;

  const taskData = {
    title,
    category,
    priority,
    status,
  };

  // UPDATE MODE
  if (isEditMode) {
    updateTask(currentTaskId, taskData);

    isEditMode = false;
    currentTaskId = null;

    addTaskBtn.innerText = "Add Task";
  } else {
    // ADD MODE
    taskData.id = Date.now();
    addTask(taskData);
  }

  updateUI()
  clearInputs();
});

tasksContainer.addEventListener("click", (e) => {
  const id = e.target.getAttribute("data-id");
  // delete
  if (e.target.classList.contains("delete-btn")) {
    deleteTask(id);

    updateUI()
  }

  // edit
  if (e.target.classList.contains("edit-btn")) {
    const task = tasks.find((t) => t.id == id);
    fillForm(task);
    isEditMode = true;
    currentTaskId = id;
    document.getElementById("addTaskBtn").innerText = "Update Task";
  }
});

function updateFilters() {
  const filteredTasks = filterTasks(
    searchInput.value,
    categoryFilter.value,
    priorityFilter.value,
    statusFilter.value,
  );

  renderTasks(filteredTasks);
}

searchInput.addEventListener("input", updateFilters);
categoryFilter.addEventListener("change", updateFilters);
priorityFilter.addEventListener("change", updateFilters);
statusFilter.addEventListener("change", updateFilters);

function updateUI() {
  renderTasks(tasks);
  const stats = getStatistics();
  renderStatistics(stats);
}
updateUI()