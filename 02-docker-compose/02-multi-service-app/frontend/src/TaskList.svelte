<!-- TaskList.svelte -->
<script>
  import { onMount, onDestroy } from "svelte";
  import { tasks, fetchTasks } from "./store";
  import Task from "./Task.svelte";

  // Subscribe to changes in the tasks store
  const unsubscribe = tasks.subscribe(() => {});

  // Fetch tasks on component mount
  onMount(fetchTasks);

  // Unsubscribe when the component is destroyed to avoid memory leaks
  onDestroy(unsubscribe);
</script>

<ul class="mt-4">
  {#each $tasks as task, index}
    <Task task={task} index={index} />
  {/each}
</ul>
