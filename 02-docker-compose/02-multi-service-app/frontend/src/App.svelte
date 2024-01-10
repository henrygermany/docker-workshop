<!-- App.svelte -->
<script lang="ts">
  import TaskList from "./TaskList.svelte";
  import AddTask from "./AddTask.svelte";
</script>

<div class="min-h-screen">
  <main class="text-center">
    <h1 class="py-5 text-5xl font-semibold dark:text-white">
      <span
        class="rounded bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-bottom bg-no-repeat"
      >TaskTango</span
      >
    </h1>

    <AddTask />

    <TaskList />
  </main>

  <footer class="sticky top-[100vh] py-4 text-center text-xs">
    Made by Henry Germany with <a class="underline decoration-rose-400" href="https://svelte.dev/"
  >Svelte</a
  >
    +
    <a
      href="https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit"
      class="underline decoration-indigo-500">Vite</a
    >, <a href="https://tailwindcss.com/" class="underline decoration-fuchsia-500">Tailwind</a> and ❤️
  </footer>
</div>
