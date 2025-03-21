<script lang="ts">
	import type { PageData } from "../$types";
    import SettingsForm from "./settings-form.svelte";
    let { data }: { data: PageData } = $props();
  </script>
   
  <SettingsForm {data} />