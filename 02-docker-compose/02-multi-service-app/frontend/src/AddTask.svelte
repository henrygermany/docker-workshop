<!-- AddTask.svelte -->
<script>
  import { addTask } from "./store";
  import Button from "./lib/Button.svelte";

  let newTask = "";

  function addTaskAndReset() {
    if (newTask.trim() !== "") {
      addTask({ text: newTask });
      newTask = "";
    }
  }
</script>

<div class="mt-4 flex justify-center">
  <input
    class="block w-96 rounded-l border border-gray-700 bg-gray-700 p-2.5 text-sm font-semibold text-white focus:border-blue-500 focus:outline-none"
    bind:value={newTask}
    placeholder="Add a new task"
  />
  <Button class="primary rounded-r" on:click={addTaskAndReset}>Add</Button>
</div>
