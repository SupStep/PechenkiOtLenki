<template>
	<header>
		<div class="header__container">
			<div class="header__logo-wrapper">
				<component class="logo__icon" @click="toHome" :is="logo"></component>
			</div>
			<nav class="header__menu">
				<ul class="header__menu-list">
					<li class="header__menu-item">
						<router-link to="/">главная</router-link>
					</li>
					<li class="header__menu-item">
						<router-link to="about">обо мне</router-link>
					</li>
					<li class="header__menu-item">
						<router-link to="catalog">каталог</router-link>
					</li>
				</ul>
			</nav>
			<nav class="header__submenu">
				<ul class="header_sub_menu-list">
					<li class="header__submenu-item">
						<div
							v-if="isCartNotEmpty"
							class="header__submenu-item-circle"
						></div>
						<component
							class="cart__icon"
							@click="toCart"
							:is="cart"
						></component>
					</li>
				</ul>
			</nav>
		</div>
	</header>

	<n-config-provider :theme-overrides="themeOverrides">
		<n-modal-provider>
			<main>
				<RouterView />
			</main>
		</n-modal-provider>
	</n-config-provider>
	<footer>
		<div class="footer__container">
			<div class="footer__logo-wrapper">
				<component class="logo__icon" @click="toHome" :is="logo"></component>
			</div>
			<nav class="footer__menu">
				<ul class="footer__info-list">
					<li class="footer__info-item">Навигация:</li>
					<li class="footer__info-item">
						<router-link to="/">главная</router-link>
					</li>
					<li class="footer__info-item">
						<router-link to="about">обо мне</router-link>
					</li>
					<li class="footer__info-item">
						<router-link to="catalog">каталог</router-link>
					</li>
				</ul>
			</nav>
			<ul class="footer__info-list">
				<li class="footer__info-item">Время работы:</li>
				<li class="footer__info-item">Пн-Вс</li>
				<li class="footer__info-item">С 9:00 до 20:00</li>
			</ul>

			<ul class="footer__info-list">
				<li class="footer__info-item">Почта:</li>
				<li class="footer__info-item">PechenkiOtLenki@ya.ru</li>
			</ul>

			<nav class="footer__info-list">
				<h4 class="footer__info-item">Социальные сети:</h4>
				<div class="footer__icon-wrapper">
					<ul>
						<li class="footer__icon-item">
							<a
								href="https://www.instagram.com/pechenkiotlenki?igsh=MXAwMXVqc2V3OGxmcg%3D%3D&utm_source=qr"
							>
								<component
									class="footer__icon"
									:is="instagram_logo"
								></component>
							</a>
							<p>@pechenkiotlenki</p>
						</li>
						<li class="footer__icon-item">
							<a href="https://web.telegram.org/k/#@pechenki_otLenki">
								<component class="footer__icon" :is="telegram_logo"></component>
							</a>
							<p>для связи</p>
						</li>
					</ul>
					<ul>
						<li class="footer__icon-item">
							<a href="https://t.me/pechenki_SLenkoi">
								<component class="footer__icon" :is="telegram_logo"></component>
							</a>
							<p>канал</p>
						</li>
						<li class="footer__icon-item">
							<span href="">
								<component class="footer__icon" :is="whatsapp_logo"></component>
							</span>
							<p>+79262100253</p>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</footer>
</template>

<script setup>
import cart from '@/components/icons/cart.vue'
import instagram_logo from '@/components/icons/instagram_logo.vue'
import logo from '@/components/icons/logo.vue'
import telegram_logo from '@/components/icons/telegram_logo.vue'
import whatsapp_logo from '@/components/icons/whatsapp_logo.vue'
import { NConfigProvider } from 'naive-ui'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from './stores/store'

const themeOverrides = {
	Carousel: {
		dotColor: '#cae8c4FF',
		dotColorActive: '#668567FF',
	},
	BackTop: {
		iconColorHover: '#95b88eFF',
		iconColorPressed: '#667E62FF',
	},
	Spin: {
		color: '#95b88eFF',
	},
}

const store = useStore()
const router = useRouter()

const isCartNotEmpty = computed(() => store.cartItems.length > 0)

const toHome = () => {
	router.push('/')
}

const toCart = () => {
	router.push('cart')
}
</script>

<style scoped>
@font-face {
	font-family: 'ISOCPEUR';
	src: url('/src/assets/fonts/ISOCPEUR.ttf');
}

* {
	font-family: 'ISOCPEUR';
}

header {
	width: 100%;
	background-color: #95b88e;
}

main {
	margin: 0 auto;
}

.header__container {
	min-inline-size: 250px;
	max-inline-size: 1280px;
	margin: 0 auto;
	padding: 0px 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.header__submenu-item {
	position: relative;
	cursor: pointer;
}

.header__menu-list {
	display: flex;
	text-transform: uppercase;
	gap: 24px;
}

.header_sub_menu-list {
	display: flex;
	text-transform: uppercase;
	gap: 12px;
}

.header__submenu-item-circle {
	width: 12px;
	aspect-ratio: 1;
	border-radius: 50%;
	background-color: #c5f5bc;
	position: absolute;
	top: -2px;
	right: 0px;
}

.header__logo-wrapper {
	cursor: pointer;
}

.active-link {
	background-size: 80% 2px;
}

footer {
	width: 100%;

	background-color: #95b88e;
}

.footer__container {
	min-inline-size: 250px;
	max-inline-size: 1280px;
	margin: 0 auto;
	padding: 12px 24px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: start;
	gap: 12px;
	color: #fff;
}

.footer__info-list {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.footer__info-list .footer__info-item:first-child {
	font-weight: bold;
}

.footer__info-item {
	font-size: 18px;
}

.footer__icon-item a:hover {
	background-size: 0;
}

.footer__icon-wrapper ul {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.footer__icon-wrapper {
	display: flex;
	gap: 12px;
}

.footer__icon-item {
	display: flex;
	align-items: center;
	gap: 8px;
}

.footer__icon-item p {
	font-size: 18px;
}

.footer__menu-list {
	display: flex;
	flex-direction: column;
	text-transform: uppercase;
	gap: 12px;
}

.footer__logo-wrapper {
	cursor: pointer;
}

@media (max-width: 1000px) {
	.footer__info-item {
		font-size: 14px;
	}

	.footer__icon-item p {
		font-size: 14px;
	}
}

@media (max-width: 768px) {
	header {
		padding: 0 12px;
	}
}

@media (max-width: 425px) {
	.header__container {
		padding: 0;
	}
	.header__menu-item a {
		font-size: 12px;
	}

	.footer__container {
		padding: 12px;
	}

	.logo__icon {
		width: 56px;
	}
	.cart__icon {
		width: 32px;
	}

	.footer__info-list {
		gap: 6px;
	}

	.footer__icon {
		width: 30px;
	}
}
</style>
