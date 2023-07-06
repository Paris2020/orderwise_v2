<script setup>
	
	const props = defineProps({
		name: String
	})
</script>
<template>
	<span class="icon">
		<svg><use :href="`#${props.name}`"></use></svg>
	</span> <!-- end.icon -->
</template>