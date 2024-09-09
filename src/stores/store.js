import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('pechenki', () => {
	const apiBaseUrl = 'https://supstep-serverpechenki-4819.twc1.net/api'
	const botToken = '7005259421:AAGhVHBJaR5ELuSAsVA9UxBRkYA1zhVJg2A'
	const chatId = '6033326324'
	const cartItems = ref([])

	async function getAllProduct() {
		try {
			const response = await axios.get(`${apiBaseUrl}`)
			return response.data
		} catch (error) {
			console.error('Error fetching products:', error)
			throw error
		}
	}

	async function auth(name, password) {
		try {
			const response = await axios.post(`${apiBaseUrl}/login`, {
				name,
				password,
			})

			if (response.status === 200) {
				return { success: true, message: response.data.message }
			}
		} catch (error) {
			if (error.response && error.response.status === 401) {
				console.error('Invalid name or password:', error.response.data.error)
				return { success: false, error: error.response.data.error }
			} else {
				console.error('Error during authentication:', error.message)
				return {
					success: false,
					error: 'An error occurred during authentication',
				}
			}
		}
	}

	async function createNewProduct(formData) {
		try {
			const response = await axios.post(`${apiBaseUrl}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			return response.data
		} catch (error) {
			console.error('Error creating product:', error)
			throw error
		}
	}

	async function deleteOneProduct(productId, type) {
		try {
			const response = await axios.delete(`${apiBaseUrl}/${productId}`, {
				data: { type },
			})
			return response.data
		} catch (error) {
			console.error('Error deleting product:', error)
			throw error
		}
	}

	function addToCart(product) {
		cartItems.value.push({ name: product.name, price: product.price })
	}

	function removeFromCart(product) {
		const index = cartItems.value.findIndex(
			item => item.name === product.name && item.price === product.price
		)
		if (index !== -1) {
			cartItems.value.splice(index, 1)
		}
	}

	function clearCart() {
		cartItems.value = []
	}

	async function sendOrder(orderDetails) {
		console.log('Order Details:', orderDetails)

		if (!orderDetails.items || !Array.isArray(orderDetails.items)) {
			throw new Error('Invalid items list')
		}

		const itemsList = orderDetails.items
			.map(item => `${item.name} - ${item.price}₽`)
			.join('\n')
		const message = `
Имя: ${orderDetails.name}
Телефон: ${orderDetails.phone}
Почта: ${orderDetails.email}

Товары:
${itemsList}

Итоговая стоимость: ${orderDetails.totalPrice}₽
`
		try {
			await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId,
				text: message,
			})
		} catch (error) {
			console.error('Error sending message:', error)
			throw error
		}
	}

	async function editProduct(productId, formData) {
		try {
			const response = await axios.put(`${apiBaseUrl}/${productId}`, formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			return response.data
		} catch (error) {
			console.error('Error editing product:', error)
			throw error
		}
	}

	return {
		auth,
		getAllProduct,
		createNewProduct,
		deleteOneProduct,
		addToCart,
		removeFromCart,
		clearCart,
		cartItems,
		sendOrder,
		editProduct,
	}
})
