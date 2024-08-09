<template>
	<div class="page__container">
		<div v-if="!isAuthenticated">
			<h1 class="page__title">Авторизация</h1>
			<form @submit.prevent="login">
				<input v-model="name" placeholder="Имя" required />
				<input
					v-model="password"
					type="password"
					placeholder="Пароль"
					required
				/>
				<Button @click.prevent="login" title="Вход" />
			</form>
		</div>
		<div v-else>
			<h1 class="page__title">Панель</h1>

			<!-- Форма создания нового товара -->
			<h2 class="admin__title">Создать новый товар</h2>
			<form class="form__create">
				<label for="type">Тип:</label>
				<select v-model="newProduct.type" required>
					<option value="product">Продукт</option>
					<option value="recipe">Рецепт</option>
					<option value="box">Бокс</option>
				</select>

				<label for="name">Название:</label>
				<input
					v-model="newProduct.name"
					type="text"
					placeholder="Название"
					required
				/>

				<label v-if="newProduct.type !== 'box'" for="description"
					>Описание:</label
				>
				<textarea
					v-if="newProduct.type !== 'box'"
					v-model="newProduct.description"
					placeholder="Описание"
				></textarea>

				<label v-if="newProduct.type === 'product'" for="composition"
					>Состав:</label
				>
				<textarea
					v-if="newProduct.type === 'product'"
					v-model="newProduct.composition"
					placeholder="Состав (для продуктов)"
				></textarea>

				<label for="price">Цена:</label>
				<input
					v-model="newProduct.price"
					type="number"
					placeholder="Цена"
					required
				/>

				<label v-if="newProduct.type === 'product'" for="section"
					>Секция:</label
				>
				<input
					v-if="newProduct.type === 'product'"
					v-model="newProduct.section"
					type="text"
					placeholder="Секция"
				/>

				<label v-if="newProduct.type === 'box'" for="structure"
					>Структура:</label
				>
				<textarea
					v-if="newProduct.type === 'box'"
					v-model="newProduct.structure"
					placeholder="Структура бокса"
				></textarea>

				<label for="photo">Фотография:</label>
				<input type="file" multiple @change="handleFileUpload" />

				<Button @click.prevent="createProduct" title="Создать" />
			</form>

			<!-- Рецепты -->
			<h2 class="admin__title">Рецепты</h2>
			<div class="admin__item-wrapper">
				<div
					class="admin__item"
					v-for="item in products.recipes"
					:key="item.id"
				>
					<p>{{ item.name }}</p>
					<Button @click="deleteProduct(item.id, 'recipe')" title="удалить" />
				</div>
			</div>

			<!-- Боксы -->
			<h2 class="admin__title">Боксы</h2>
			<div class="admin__item-wrapper">
				<div class="admin__item" v-for="item in products.boxes" :key="item.id">
					<p>{{ item.name }}</p>
					<Button @click="deleteProduct(item.id, 'box')" title="удалить" />
				</div>
			</div>

			<!-- Товары по секциям -->
			<div
				v-if="products.productsBySections && products.productsBySections.length"
			>
				<h2 class="admin__title">Товары по секциям</h2>
				<div
					v-for="section in products.productsBySections"
					:key="section.section_name"
				>
					<h3 class="section_name">{{ section.section_name }}</h3>
					<div class="admin__item-wrapper">
						<div
							class="admin__item"
							v-for="item in section.products"
							:key="item.id"
						>
							<p>{{ item.name }}</p>
							<Button
								@click="deleteProduct(item.id, 'product')"
								title="удалить"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import { useStore } from '@/stores/store'
import { onMounted, ref } from 'vue'

const name = ref('')
const password = ref('')
const isAuthenticated = ref(false)
const store = useStore()
const products = ref({})
const newProduct = ref({
	type: 'product',
	name: '',
	description: '',
	composition: '',
	price: '',
	section: '',
	structure: '',
	photo: null,
})

const login = async () => {
	try {
		const { success } = await store.auth(name.value, password.value)
		if (success) {
			isAuthenticated.value = true
			localStorage.setItem('isAuthenticated', 'true')
			await fetchProducts()
		}
	} catch (error) {
		console.error('Error logging in:', error)
	}
}

const fetchProducts = async () => {
	try {
		const data = await store.getAllProduct()
		products.value = data
	} catch (error) {
		console.error('Error fetching products:', error)
	}
}

const createProduct = async () => {
	try {
		const formData = new FormData()
		for (const key in newProduct.value) {
			if (
				newProduct.value[key] !== null &&
				newProduct.value[key] !== undefined
			) {
				if (key === 'photos') {
					for (let i = 0; i < newProduct.value.photos.length; i++) {
						formData.append('photos', newProduct.value.photos[i])
					}
				} else {
					formData.append(key, newProduct.value[key])
				}
			}
		}

		await store.createNewProduct(formData)
		await fetchProducts()

		// Reset form
		newProduct.value = {
			type: 'product',
			name: '',
			description: '',
			composition: '',
			price: '',
			section: '',
			structure: '',
			photos: [],
		}
	} catch (error) {
		console.error('Error creating product:', error)
	}
}

const handleFileUpload = event => {
	const files = event.target.files
	if (files.length) {
		newProduct.value.photos = Array.from(files)
	}
}

const deleteProduct = async (productId, type) => {
	try {
		await store.deleteOneProduct(productId, type)
		await fetchProducts()
	} catch (error) {
		console.error('Error deleting product:', error)
	}
}

onMounted(async () => {
	isAuthenticated.value = !!localStorage.getItem('isAuthenticated')
	if (isAuthenticated.value) {
		await fetchProducts()
	}
})
</script>

<style scoped>
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
.admin__title {
	font-size: 24px;
	text-align: start;
	margin: 12px 0;
}
.admin__item-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
}

.admin__item-wrapper p {
	font-size: 20px;
}

.admin__item {
	padding: 8px;
	border-radius: 10px;
	background-color: #95b88e;
	color: #fff;
	display: flex;
	gap: 12px;
	align-items: center;
}

.section_name {
	font-size: 22px;
}

form {
	display: flex;
	flex-direction: column;
	gap: 12px;
	align-items: start;
}
form input {
	padding: 8px;
}

.form__create {
	width: 40%;
	border-radius: 10px;
	margin-bottom: 24px;
	padding: 24px;
	background-color: #a2ba9e;
	display: grid;
	grid-template-columns: 100px 300px;
	gap: 24px;
}
</style>
