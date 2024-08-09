<template>
	<div class="page__container">
		<h1 class="page__title">Корзина</h1>
		<span v-if="!isCartNotEmpty" class="cart__message">Корзина пуста</span>
		<div v-else>
			<p class="page__message">
				Важно! Выдача товара осуществляется в ручном режиме. После того как вы
				добавите интересующие товары в корзину, заполните персональные данные и
				оставьте заявку на покупку, мы свяжемся с вами для уточнения деталей,
				проведения оплаты и согласования сроков выполнения заказа.
			</p>
			<div class="cart__container">
				<div class="cart__item-list">
					<h2>Товары</h2>
					<div class="cart__item" v-for="(item, index) in items" :key="index">
						<p>{{ item.name }} - {{ item.price }}₽</p>
						<Button @click="removeItem(index)" title="Удалить" />
					</div>
					<div class="cart__total">
						<p>Итог: {{ totalPrice }}₽</p>
					</div>
				</div>
				<div class="cart__item-list">
					<h2>Персональные данные</h2>
					<input
						class="cart__item-input"
						v-model="personalInfo.name"
						type="text"
						placeholder="Имя"
					/>
					<input
						class="cart__item-input"
						v-model="personalInfo.phone"
						type="tel"
						placeholder="Телефон"
					/>
					<input
						class="cart__item-input"
						v-model="personalInfo.email"
						type="email"
						placeholder="Почта"
					/>
					<Button
						@click="submitOrder"
						class="cart__button"
						title="Отправить заявку"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import { useStore } from '@/stores/store'
import { computed, ref } from 'vue'

const store = useStore()

const isCartNotEmpty = computed(() => store.cartItems.length > 0)

const personalInfo = ref({
	name: '',
	email: '',
	phone: '',
})

const items = store.cartItems

const totalPrice = computed(() => {
	return store.cartItems.reduce((total, item) => total + item.price, 0)
})

const removeItem = index => {
	const item = store.cartItems[index]
	store.removeFromCart(item)
}

const submitOrder = () => {
	if (!isCartNotEmpty.value) return

	const orderDetails = {
		name: personalInfo.value.name,
		email: personalInfo.value.email,
		phone: personalInfo.value.phone,
		items: items,
		totalPrice: totalPrice.value,
	}

	store
		.sendOrder(orderDetails)
		.then(() => {
			alert('Заявка успешно отправлена!')
			store.clearCart()
			personalInfo.value = { name: '', email: '', phone: '' }
		})
		.catch(error => {
			console.error('Error sending message:', error)
			alert('Ошибка при отправке заявки')
		})
}
</script>

<style scoped>
.page__container {
	padding: 24px;
	position: relative;
	min-height: 86vh;
	min-inline-size: 250px;
	max-inline-size: 1280px;
	margin: 0 auto;
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

.cart__message {
	font-size: 24px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.page__message {
	font-size: 20px;
}

.cart__container {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 24px;
}

.cart__item-list {
	width: 400px;
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.cart__item-list h2 {
	text-align: start;
	font-size: 24px;
}

.cart__item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	background-color: #95b88e;
	padding: 12px;
	width: 100%;
	border-radius: 10px;
	align-self: baseline;
}

.cart__item p {
	color: #fff;
	font-size: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}

.cart__total {
	font-size: 20px;
}

.cart__item-input {
	padding: 8px;
	align-self: baseline;
	width: 250px;
	border: 2px solid #95b88e;
	border-radius: 4px;
}

.cart__button {
	align-self: baseline;
}

@media (max-width: 1000px) {
	.cart__message {
		font-size: 18px;
	}

	.page__message {
		font-size: 16px;
	}
}

@media (max-width: 768px) {
	.cart__item-list {
		width: 100%;
	}
}

@media (max-width: 425px) {
	.page__title {
		font-size: 26px;
		margin-bottom: 6px;
	}
}
</style>
