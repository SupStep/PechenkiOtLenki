<template>
	<div class="carousel__wrapper">
		<n-carousel class="carousel" show-arrow autoplay :show-dots="false">
			<n-carousel-item class="carousel-item first">
				<div>
					<h1>Подарочные наборы на любой праздник</h1>
					<Button @click="toCatalog" title="Подробнее" />
				</div>
			</n-carousel-item>
			<n-carousel-item class="carousel-item second">
				<div>
					<h1>Печенье и многое другое по уникальным рецептам</h1>
					<Button @click="toCatalog" title="Подробнее" />
				</div>
			</n-carousel-item>
			<n-carousel-item class="carousel-item third">
				<div>
					<h1>Научитесь создавать уникальные рецепты вместе со мной</h1>
					<Button @click="toCatalog" title="Подробнее" />
				</div>
			</n-carousel-item>
		</n-carousel>
	</div>
	<section class="section section__offer">
		<h2 class="section__title">Что я предлагаю?</h2>
		<div class="section__container">
			<div class="section__item">
				<h3 class="section__item-title">Уникальные рецепты печенья</h3>
				<Button @click="toCatalog" title="купить рецепт" />
			</div>
			<div class="section__item">
				<h3 class="section__item-title">Супер боксы на все случаи жизни</h3>
				<Button @click="toCatalog" title="купить бокс" />
			</div>
		</div>
	</section>

	<section class="section__explain">
		<div class="section__explain-container">
			<h2 class="section__title">Почему выбирают мои изделия?</h2>
			<div class="section__container">
				<article class="section__item">
					<h3 class="section__item-title">Понятные объяснения</h3>
					<p class="section__item-text">
						Доношу важную информацию простым и доступным языком.Без воды, все
						четко и по делу.
					</p>
				</article>
				<article class="section__item">
					<h3 class="section__item-title">Богатый опыт работы</h3>
					<p class="section__item-text">
						Постоянно провожу живые МК, а также общаюсь с онлайн студентами.
						Знаю частые ошибки и пути их преодоления.
					</p>
				</article>
				<article class="section__item">
					<h3 class="section__item-title">Четкость и откровенность</h3>
					<p class="section__item-text">
						Ничего не утаиваю. Выдаю информацию в полном объеме. Порядочность и
						открытость.
					</p>
				</article>
				<article class="section__item">
					<h3 class="section__item-title">Внимание к деталям</h3>
					<p class="section__item-text">
						Мой принцип - выбирать лучшее, но с умом и без лишних переплат.
					</p>
				</article>
			</div>
		</div>
	</section>
	<section class="section section__gallery">
		<h2 class="section__title">Из самого вкусного</h2>
		<div class="gallery__wrapper">
			<video class="gallery__item" muted playsinline loop autoplay>
				<source src="../assets/cookie_vid.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div class="gallery__item"></div>
			<div class="gallery__item"></div>
			<div class="gallery__item"></div>
			<div class="gallery__item"></div>
		</div>
	</section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from '../components/Button.vue'
const router = useRouter()

const toCatalog = () => {
	router.push('catalog')
}
</script>

<style scoped>
.carousel__wrapper {
	width: 100%;
	background-color: #cae8c4;
}
.carousel {
	height: 340px;
	min-inline-size: 375px;
	max-inline-size: 1280px;
	margin: 0 auto;
}

.first {
	background-image: url('@/assets/slide_1.jpg');
}

.second {
	background-image: url('@/assets/slide_2.jpg');
}

.third {
	background-image: url('@/assets/slide_3.jpg');
}

.carousel-item {
	background-repeat: no-repeat;
	background-size: cover;
	padding-left: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.carousel-item h1 {
	font-size: 68px;
	width: 70%;
	color: #668567;
	line-height: 4.5rem;
	margin-bottom: 12px;
}

.section {
	min-inline-size: 375px;
	max-inline-size: 1280px;
	margin: 0 auto;
	padding: 24px 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.section__explain {
	width: 100%;
	background-color: #d9e9a9;
}

.section__explain-container {
	padding: 24px 24px;
	min-inline-size: 375px;
	max-inline-size: 1280px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.section__container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 24px;
}

.section__offer .section__item {
	width: 460px;
	aspect-ratio: 1;
	background-size: cover;
	border-radius: 10px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
}

.section__offer .section__item-title {
	position: relative;
	z-index: 10;
	color: #fff;
	font-weight: 400;
	font-size: 48px;
	text-align: center;
	line-height: 3.3rem;
}

.section__offer .section__item:before {
	content: '';
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	border-radius: 10px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
}

.section__offer .section__item:nth-child(1) {
	background-image: url('../../cookies.jpg');
}

.section__offer .section__container .section__item:nth-child(2) {
	background-image: url('../../box.jpg');
}

.section__explain .section__item {
	background-color: #668567;
	width: 220px;
	border-radius: 20px;
	padding: 18px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	color: #fff;
}

.section__explain .section__item-title {
	font-size: 24px;
	border-bottom: 2px solid #fff;
	padding-bottom: 12px;
	line-height: 1.8rem;
}

.section__explain .section__item-text {
	font-size: 20px;
	line-height: 1.8rem;
}

.gallery__wrapper {
	display: grid;
	justify-content: center;
	grid-template-columns: 300px 1fr 1fr;
	grid-template-rows: repeat(2, 240px);
	gap: 24px;
}

.gallery__item {
	background-image: url('../../cookies.jpg');
	background-size: cover;
	background-position: center;
	border-radius: 10px;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.gallery__item:first-child {
	background: none;
	grid-row-start: 1;
	grid-row-end: 3;
}

@media (max-width: 1000px) {
	.carousel {
		width: 100%;
		height: 280px;
	}

	.carousel-item {
		background-position: right;
	}

	.carousel-item h1 {
		font-size: 48px;
		width: 65%;
		line-height: 3rem;
	}

	.section__offer .section__item {
		width: 320px;
	}

	.section__offer .section__item-title {
		font-size: 32px;
		line-height: 2.2rem;
	}

	.section__explain .section__item {
		width: 320px;
		padding: 12px;
	}

	.section__explain .section__item-title {
		font-size: 22px;
	}

	.section__explain .section__item-text {
		font-size: 20px;
	}

	.gallery__wrapper {
		grid-template-columns: 350px 350px;
		grid-template-rows: repeat(3, 260px);
		gap: 16px;
	}
}

@media (max-width: 768px) {
	.section {
		padding: 18px;
	}

	.carousel {
		width: 100%;
		height: 340px;
	}

	.carousel-item {
		padding-left: 18px;
	}

	.carousel-item h1 {
		position: relative;
		color: #fff;
		font-size: 32px;
		width: 90%;
		z-index: 10;
	}

	.carousel-item::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 10px;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.first {
		background-image: url('@/assets/slide_1_small.jpg');
	}

	.second {
		background-image: url('@/assets/slide_2_small.jpg');
	}
	.third {
		background-image: url('@/assets/slide_3_small.jpg');
	}

	.gallery__wrapper {
		grid-template-columns: 376px;
		grid-template-rows: repeat(6, 260px);
		gap: 16px;
	}

	.section__explain .section__item {
		width: 320px;
		padding: 12px;
	}

	.section__explain .section__item-title {
		font-size: 22px;
	}

	.section__explain .section__item-text {
		font-size: 20px;
	}
}
</style>
