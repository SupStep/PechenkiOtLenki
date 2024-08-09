<template>
	<button>
		{{ title }}
	</button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>

<style scoped>
button {
	position: relative;
	border-radius: 10px;
	background-color: #668567;
	padding: 10px 20px;
	color: #fff;
	z-index: 10;
	text-transform: uppercase;
	transition: 0.2s;
}

button:hover {
	background-color: #536c54;
}

@media (max-width: 768px) {
	button {
		padding: 8px 18px;
		font-size: 14px;
	}
}
</style>
