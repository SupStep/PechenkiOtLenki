<template>
	<n-back-top :right="0" :bottom="50" style="z-index: 20" />
	<div v-if="!isLoading" class="page__container">
		<h1 class="page__title">КАТАЛОГ</h1>
		<nav class="filter__menu">
			<button @click="toggleMenu" class="filter__button">
				<component :is="filter"></component>
			</button>
			<button @click="clearFilter" class="filter__close-button">
				<p>{{ filterValue }}</p>
				<component v-if="filterValue !== 'Все'" :is="close"></component>
			</button>
			<div
				class="filter__list-wrapper"
				:class="{ 'filter__list-wrapper-active': isOpen }"
			>
				<ul class="filter__list">
					<n-infinite-scroll style="max-height: 200px" :distance="10">
						<li class="filter__item" @click.prevent="filterSection('Все')">
							Все
						</li>
						<li class="filter__item" @click.prevent="filterSection('Рецепты')">
							Рецепты
						</li>
						<li class="filter__item" @click.prevent="filterSection('Боксы')">
							Боксы
						</li>
						<li
							class="filter__item"
							v-for="item in products.productsBySections"
							:key="item.section_name"
							@click="filterSection(item.section_name)"
						>
							{{ item.section_name }}
						</li>
					</n-infinite-scroll>
				</ul>
			</div>
		</nav>
		<section
			class="section"
			v-if="filterValue === 'Все' || filterValue === 'Рецепты'"
		>
			<h2 class="section__catalog-title">Рецепты</h2>
			<productCard :data="products.recipes" />
		</section>
		<section
			class="section"
			v-if="filterValue === 'Все' || filterValue === 'Боксы'"
		>
			<h2 class="section__catalog-title">Боксы</h2>
			<productCard :data="products.boxes" />
		</section>

		<section
			class="section"
			v-for="section in filteredSections"
			:key="section.section_name"
		>
			<h2 class="section__catalog-title">{{ section.section_name }}</h2>
			<productCard :data="section.products" />
		</section>
	</div>
</template>

<script setup>
import close from '@/components/icons/close.vue'
import { useStore } from '@/stores/store'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import filter from '../components/icons/filter.vue'
import productCard from '../components/productCard.vue'

const route = useRoute()
const store = useStore()
const products = ref([])
const isOpen = ref(false)

const isLoading = ref(true)

const toggleMenu = () => {
	isOpen.value = !isOpen.value
}

const filterValue = ref('Все')

const filterSection = sectionName => {
	filterValue.value = sectionName
	isOpen.value = false
}

const clearFilter = () => {
	filterValue.value = 'Все'
}

const filteredSections = computed(() => {
	if (filterValue.value === 'Все') {
		return products.value.productsBySections
	}
	return products.value.productsBySections.filter(
		section => section.section_name === filterValue.value
	)
})

onMounted(async () => {
	try {
		const data = await store.getAllProduct()
		products.value = data

		if (route.query.filter) {
			filterValue.value = route.query.filter
		}
		window.scrollTo(0, 0)
		if (products.value) {
			isLoading.value = false
		}
	} catch (error) {
		console.error('Error fetching products:', error)
	}
})
</script>

<style scoped>
.filter__menu {
	position: relative;
	display: flex;
	gap: 24px;
	align-items: center;
}

.filter__list-wrapper {
	opacity: 0;
	visibility: hidden;
	overflow: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
}

.filter__list-wrapper-active {
	opacity: 1;
	visibility: visible;
}

.filter__list {
	position: absolute;
	top: 60px;
	left: 0px;
	background-color: #fff;
	padding: 12px;
	border-radius: 10px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	z-index: 22;
	width: 200px;
	display: flex;
	flex-direction: column;
}

.filter__item {
	font-size: 14px;
	padding: 6px;
	cursor: pointer;
	transition: all 0.3s;
	border-radius: 5px;
}

.filter__item:hover {
	background-color: #95b88e20;
	color: #95b88e;
}

.filter__close-button {
	display: flex;
	gap: 12px;
	border-radius: 10px;
	padding: 12px;
	background-color: #95b88e20;
	color: #668567;
	font-size: 14px;
	transition: background-color 0.3s;
}

.filter__close-button:hover {
	background-color: #95b88e70;
}

.section__catalog-title {
	text-align: left;
	margin: 0 0 12px 0;
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
	margin-bottom: 18px;
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
