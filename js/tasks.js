import { tasks } from "./data.js";
import { saveTasks } from "./storage.js";

export function addTask(task) {
  tasks.push(task);
  saveTasks(tasks);
}

export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id == id);

  if (index !== -1) {
    tasks.splice(index, 1);
    saveTasks(tasks);
  }
}

export function updateTask(id, updatedTask) {
  const index = tasks.findIndex((task) => task.id == id);

  if (index !== -1) {
    tasks[index] = {
      ...tasks[index],
      ...updatedTask,
    };
    saveTasks(tasks);
  }
}

export function filterTasks(searchValue, category, priority, status) {
  return tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    const matchesCategory = category === "" || task.category === category;
    const matchesPriority = priority === "" || task.priority === priority;
    const matchesStatus = status === "" || task.status === status;
    return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
  });
}



export function getStatistics() {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.status === "Completed").length;

  const pending = tasks.filter((task) => task.status === "Pending").length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  return {
    total,
    completed,
    pending,
    inProgress,
  };
}
