// store.js
import { writable } from "svelte/store";

const BASE_URL = "http://localhost:3000";
// Create a writable store
export const tasks = writable([]);

export async function fetchTasks() {
  const response = await fetch(`${BASE_URL}/todos`);
  const data = await response.json();
  tasks.set(data.slice(0, 5));
}

export async function updateTask(newTask) {
  const response = await fetch(`${BASE_URL}/todos/${newTask.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(newTask)
  });
  const updatedTask = await response.json();
  console.log(updatedTask);

  // Update the store with the updated task
  tasks.update((currentTasks) =>
    currentTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
  );

  return updatedTask;
}

// Function to add a new task to the store
export async function addTask(newTask) {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    body: JSON.stringify(newTask),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  const createdTask = await response.json();

  tasks.update((currentTasks) => [...currentTasks, createdTask]);
}

// Function to remove a task from the store by ID
export async function removeTask(task) {
  console.log(task.id);
  const response = await fetch(`${BASE_URL}/todos/${task.id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  if (response.ok) {
    console.log("Deleted");
    tasks.update((currentTasks) =>
      currentTasks.filter((item) => {
        return item.id !== task.id;
      })
    );
  }
}
