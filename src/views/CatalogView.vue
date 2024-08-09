<template>
	<div class="page__container">
		<h1 class="page__title">КАТАЛОГ</h1>
		<section class="section">
			<h2 class="section__catalog-title">Рецепты</h2>
			<productCard :data="products.recipes" />
		</section>
		<section class="section">
			<h2 class="section__catalog-title">Боксы</h2>
			<productCard :data="products.boxes" />
		</section>
		<section
			class="section"
			v-for="section in products.productsBySections"
			:key="section.section_name"
		>
			<h2 class="section__catalog-title">{{ section.section_name }}</h2>
			<productCard :data="section.products" />
		</section>
	</div>
</template>

<script setup>
import { useStore } from '@/stores/store'
import { onMounted, ref } from 'vue'
import productCard from '../components/productCard.vue'

const store = useStore()
const products = ref([])

onMounted(async () => {
	try {
		const data = await store.getAllProduct()
		products.value = data
	} catch (error) {
		console.error('Error fetching products:', error)
	}
})
</script>

<style scoped>
.section__catalog-title {
	text-align: left;
	margin: 12px 0;
}

.page__container {
	padding: 24px;
	position: relative;
	min-height: 100vh;
}
.page__title {
	font-size: 38px;
	font-weight: 600;
	background-image: linear-gradient(#000000, #000000);
	background-repeat: no-repeat;
	background-size: 80px 2px;
	background-position: left bottom;
	padding-bottom: 2px;
	text-decoration: none;
	margin-bottom: 24px;
}

@media (max-width: 425px) {
	.page__title {
		font-size: 26px;
		margin-bottom: 6px;
	}

	.section__catalog-title {
		margin: 6px 0;
		font-size: 22px;
	}
}
</style>
