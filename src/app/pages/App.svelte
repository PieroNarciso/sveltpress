<script>
  import { onMount } from "svelte";

  let message = "";


  onMount(async () => {
    console.log("App mounted");

    try {
      const res = await fetch("/api/hello");
      const data = await res.json();
      message = data.message;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });
</script>

<main>
  Hola desde main

  <div>{message}</div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
