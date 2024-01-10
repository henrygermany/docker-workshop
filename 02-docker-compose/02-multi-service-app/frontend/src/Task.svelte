<script>
  import Button from "./lib/Button.svelte";
  import { fade } from "svelte/transition";
  import { removeTask, updateTask } from "./store.js";

  export let task;
  export let index;

  let newTitle = task.text;
  let isEditing;

  function onKeyDown(e) {
    switch (e.key) {
      case "Escape":
      // isEditing ? cancelEditing() : null;
    }
  }

  async function finishEditing() {
    isEditing = false;
    if (newTitle !== task.text) task = await updateTask({ id: task.id, text: newTitle });
  }
</script>

<!-- Task.svelte -->

<svelte:window on:keydown={onKeyDown} />

<li
  transition:fade
  class:bg-gradient-to-l={index % 2 === 0}
  class:bg-gradient-to-r={index % 2 !== 0}
  class:scale-105={isEditing}
  class="mx-auto mt-4 w-3/4 rounded from-rose-400 via-fuchsia-500 to-indigo-500 p-1 transition duration-200 ease-in-out"
>
  <div
    class:bg-transparent={isEditing}
    class="flex w-full justify-between gap-2 bg-[#121826] p-1.5 transition duration-150 ease-in-out hover:bg-transparent"
  >
    <input
      id="taskInput-{index}"
      bind:value={newTitle}
      on:focus={() => (isEditing = true)}
      on:focusout={finishEditing}
      class="text-l col-span-2 block w-full rounded border-2 border-transparent bg-transparent p-2.5 text-left text-white caret-indigo-500 transition duration-200 ease-in-out focus:border-gray-700 focus:bg-gray-700 focus:outline-none"
    />

    <Button on:click={() => removeTask(task)} class="danger rounded">Delete</Button>
  </div>
</li>
