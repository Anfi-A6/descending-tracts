<script lang="ts">
  const { name, onclick = null } = $props();
</script>

<li class="text-slate-100 flex text-xl font-bold">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"><path fill="currentColor" d="M8 9h8l-4 7" /></svg
  >
  <em>{name}</em>
</li>
