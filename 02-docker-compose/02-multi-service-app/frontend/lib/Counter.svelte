<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={increment}>
  count is {count}
</button>
