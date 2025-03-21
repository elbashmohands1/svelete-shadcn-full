<script lang="ts">
  import { Toaster } from "$lib/components/ui/sonner/index.js";
	import { ModeWatcher } from "mode-watcher";
 import "../app.css"
  let { children } = $props();
</script>

<Toaster />
<ModeWatcher />


  <div class="h-dvh grid place-items-center px-20 pt-4">
      {@render children?.()}
  
  </div>