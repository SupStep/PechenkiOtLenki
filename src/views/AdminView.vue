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
			<h2 class="admin__title">
				{{ editingProduct ? 'Редактировать товар' : 'Создать новый товар' }}
			</h2>
			<form class="form__create">
				<label for="type">Тип:</label>
				<select v-model="newProduct.type" required>
					<option value="product">Продукт</option>
					<option value="recipe">Рецепт</option>
					<option value="box">Бокс</option>
					<option value="boxItem">Элемент бокса</option>
				</select>

				<label
					v-if="newProduct.type !== 'boxItem' && newProduct.type !== 'boxItem'"
					for="name"
					>Название:</label
				>
				<input
					v-if="newProduct.type !== 'boxItem' && newProduct.type !== 'boxItem'"
					v-model="newProduct.name"
					type="text"
					placeholder="Название"
					required
				/>

				<label
					v-if="newProduct.type !== 'box' && newProduct.type !== 'boxItem'"
					for="description"
					>Описание:</label
				>
				<textarea
					v-if="newProduct.type !== 'box' && newProduct.type !== 'boxItem'"
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

				<label
					v-if="newProduct.type !== 'boxItem' && newProduct.type !== 'boxItem'"
					for="price"
					>Цена:</label
				>
				<input
					v-if="newProduct.type !== 'boxItem' && newProduct.type !== 'boxItem'"
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

				<label v-if="newProduct.type === 'boxItem'" for="box"
					>Выберите бокс:</label
				>
				<select
					v-if="newProduct.type === 'boxItem'"
					v-model="newProduct.boxId"
					required
				>
					<option v-for="box in products.boxes" :key="box.id" :value="box.id">
						{{ box.name }}
					</option>
				</select>

				<label v-if="newProduct.type === 'boxItem'" for="description"
					>Описание элемента:</label
				>
				<textarea
					v-if="newProduct.type === 'boxItem'"
					v-model="newProduct.description"
					placeholder="Описание элемента бокса"
				></textarea>

				<label for="photo">Фотография товара:</label>
				<input type="file" multiple @change="handleFileUpload" />

				<label
					v-if="editingProduct && editingProduct.type === 'box'"
					for="boxItems"
					>Выберите элемент бокса:</label
				>
				<select
					v-if="editingProduct && editingProduct.type === 'box'"
					v-model="selectedBoxItemId"
					@change="fetchBoxItemDetails"
				>
					<option
						v-for="item in editingProduct.items"
						:key="item.id"
						:value="item.id"
					>
						{{ item.description }}
					</option>
				</select>

				<label v-if="selectedBoxItemId" for="boxItemDescription"
					>Описание элемента:</label
				>
				<textarea
					v-if="selectedBoxItemId"
					v-model="boxItemDetails.description"
					placeholder="Описание элемента бокса"
				></textarea>

				<label v-if="selectedBoxItemId" for="boxItemPhoto"
					>Фотография элемента:</label
				>
				<input
					v-if="selectedBoxItemId"
					type="file"
					@change="handleBoxItemFileUpload"
				/>

				<Button
					style="grid-column-start: 1; grid-column-end: 3"
					v-if="selectedBoxItemId"
					@click.prevent="updateBoxItem"
					title="Сохранить элемент бокса"
				/>

				<Button
					style="margin-right: 12px"
					v-if="editingProduct"
					@click.prevent="cancelEditing"
					title="Отмена"
				/>

				<Button
					@click.prevent="editingProduct ? updateProduct() : createProduct()"
					:title="editingProduct ? 'Сохранить' : 'Создать'"
				/>
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
					<Button @click="startEditing(item, 'recipe')" title="Редактировать" />
					<Button @click="deleteProduct(item.id, 'recipe')" title="удалить" />
				</div>
			</div>

			<!-- Боксы -->
			<h2 class="admin__title">Боксы</h2>
			<div class="admin__item-wrapper">
				<div class="admin__item" v-for="item in products.boxes" :key="item.id">
					<p>{{ item.name }}</p>
					<Button @click="startEditing(item, 'box')" title="Редактировать" />
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
								@click="startEditing(item, 'product')"
								title="Редактировать"
							/>
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
	boxId: null, // Для элемента бокса
	photos: [],
})

const editingProduct = ref(null)
const startEditing = (product, type) => {
	editingProduct.value = { ...product, type }
	newProduct.value = { ...editingProduct.value }
}

const cancelEditing = () => {
	editingProduct.value = null
	newProduct.value = {
		type: 'product',
		name: '',
		description: '',
		composition: '',
		price: '',
		section: '',
		structure: '',
		boxId: null,
		photos: [],
	}
}

const selectedBoxItemId = ref(null)
const boxItemDetails = ref({ description: '', photos: [] })

const fetchBoxItemDetails = () => {
	if (selectedBoxItemId.value && editingProduct.value) {
		// Ищем бокс в массиве продуктов
		const box = products.value.boxes.find(b => b.id === editingProduct.value.id)

		if (box) {
			// Ищем элемент бокса по ID
			const item = box.items.find(i => i.id === selectedBoxItemId.value)

			if (item) {
				boxItemDetails.value = { ...item }
			} else {
				console.error('Box item not found.')
			}
		} else {
			console.error('Box not found.')
		}
	}
}

// Обработчик загрузки файлов для элемента бокса
const handleBoxItemFileUpload = event => {
	const files = event.target.files
	if (files.length) {
		boxItemDetails.value.photos = Array.from(files)
	}
}

const updateBoxItem = async () => {
	try {
		const formData = new FormData()

		// Добавляем тип и описание в formData
		formData.append('type', 'boxItem') // Тип для элемента бокса
		formData.append('description', boxItemDetails.value.description)

		// Если есть фотографии, добавляем их в formData
		if (boxItemDetails.value.photos.length > 0) {
			boxItemDetails.value.photos.forEach(photo => {
				formData.append('photos', photo)
			})
		}

		// Вызываем API для обновления элемента бокса
		await store.editProduct(selectedBoxItemId.value, formData)
		cancelEditing()
		selectedBoxItemId.value = null
		boxItemDetails.value = { description: '', photos: [] }
	} catch (error) {
		console.error('Error updating box item:', error)
	}
}

const updateProduct = async () => {
	try {
		const formData = new FormData()

		// Перебираем все ключи newProduct.value
		for (const key in newProduct.value) {
			if (key === 'photos') {
				if (newProduct.value.photos && newProduct.value.photos.length > 0) {
					newProduct.value.photos.forEach(photo => {
						formData.append('photos', photo)
					})
				}
			} else {
				formData.append(key, newProduct.value[key])
			}
		}

		// Вызываем API для обновления продукта
		await store.editProduct(editingProduct.value.id, formData)

		// Обновляем список продуктов
		await fetchProducts()

		// Отменяем режим редактирования
		cancelEditing()
	} catch (error) {
		console.error('Error updating product:', error)
	}
}

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
		console.log(products.value)
	} catch (error) {
		console.error('Error fetching products:', error)
	}
}

const createProduct = async () => {
	try {
		const formData = new FormData()
		for (const key in newProduct.value) {
			if (key === 'photos') {
				newProduct.value.photos.forEach(photo =>
					formData.append('photos', photo)
				)
			} else {
				formData.append(key, newProduct.value[key])
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
			boxId: null,
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
