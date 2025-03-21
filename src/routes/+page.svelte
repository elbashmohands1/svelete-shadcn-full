<script>
	import Button from "$lib/components/ui/button/button.svelte";
	import * as Card from "$lib/components/ui/card/index.js";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";

</script>


<Card.Root>
	<Card.Header class="text-xl font-bold text-primary">
		Card Header
	</Card.Header>
	<Card.CardContent>
<div class="flex gap-2">
	<Label class="flex flex-1/2 p-2 items-center justify-center">Add Title	</Label>
	<Input placeholder="add text" class="flex-1" />
	
</div>	</Card.CardContent>
	<Card.Footer class="flex gap-2 justify-between">
		<Button>
			Press Here
		</Button>
		<Button variant="outline">
			Press Here
		</Button>
	</Card.Footer>
</Card.Root>