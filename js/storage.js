export function saveTasks(tasks) {
  console.log(tasks);
  
  localStorage.setItem("datatasks", JSON.stringify(tasks));
}

export function getTasks() {
  return JSON.parse(localStorage.getItem("datatasks")) || [];
}
