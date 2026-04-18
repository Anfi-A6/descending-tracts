<script lang="ts">
  let { text, href, onclick = null } = $props();
</script>

<li class="text-slate-100 m-0 text-xl font-bold uppercase text-center p-3">
  <a {href} {onclick}>{text}</a>
</li>
