export function renderTasks(tasks) {
  const tasksContainer = document.getElementById("tasksContainer");

  tasksContainer.innerHTML = "";

  tasks.forEach((task) => {
    tasksContainer.innerHTML += `
      <div class="col-md-6 col-lg-4">

        <div class="card border-0 task-card text-light text-capitalize shadow border rounded-4  h-100">

          <h5 class="card-header px-0">${task.title}</h5>

          <p>${task.category}</p>

          <div class="d-flex justify-content-between">
          <span class="badge bg-info mb-2">
            ${task.priority}
          </span>

          <span class="badge bg-info mb-2">
            ${task.status}
          </span>
          </div>
          <div class="btn-group card-footer px-0" role="group" aria-label="Basic example">
            <button type="button" class="btn text-capitalize btn-primary edit-btn" data-id="${task.id}">edit</button>
            <button type="button" class="btn text-capitalize btn-danger delete-btn" data-id="${task.id}">delete</button>
          </div>
          

        </div>

      </div>
    `;
  });
}

export function clearInputs() {
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskCategory").selectedIndex = 0;
  document.getElementById("taskPriority").selectedIndex = 0;
  document.getElementById("taskStatus").selectedIndex = 0;
}

export function fillForm(task) {
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskCategory").value = task.category;
  document.getElementById("taskPriority").value = task.priority;
  document.getElementById("taskStatus").value = task.status;
}

export function renderStatistics(stats) {
  document.getElementById("totalTasks").innerText = stats.total;
  document.getElementById("completedTasks").innerText = stats.completed;
  document.getElementById("pendingTasks").innerText = stats.pending;
  document.getElementById("inProgressTasks").innerText = stats.inProgress;
}