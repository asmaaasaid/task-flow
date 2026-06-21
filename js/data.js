
import { getTasks } from "./storage.js";
import { renderTasks } from "./ui.js";
export let tasks = getTasks();
renderTasks(tasks)