<template>
	<div class="card__wrapper">
		<article
			class="card"
			v-for="item in data"
			:key="item.id"
			@click="openModal(item)"
		>
			<div
				class="card__img"
				:style="{
					backgroundImage:
						'url(https://supstep-serverpechenki-4819.twc1.net/photos/' +
						(item.photos.length ? item.photos[0] : 'default.jpg') +
						')',
				}"
			></div>
			<div class="card__text-wrapper">
				<h3 class="card__title">{{ item.name }}</h3>
				<p v-if="item.description" class="card__description">
					{{ item.description }}
				</p>
				<p v-if="!item.description" class="card__description">
					{{ item.structure }}
				</p>
			</div>
			<div class="card__pay-wrapper">
				<span>{{ item.price }}₽</span>
				<Button @click.stop="addToCard(item)" title="В корзину" />
			</div>
		</article>
	</div>

	<n-modal
		v-model:show="showModal"
		class="custom-card"
		preset="card"
		:style="bodyStyle"
		:title="selectedItem.name"
		:bordered="false"
		size="small"
	>
		<template v-if="selectedItem">
			<n-infinite-scroll style="max-height: 80vh" :distance="10">
				<div class="modal__container">
					<n-carousel show-arrow class="carousel" :slides-per-view="1">
						<template v-if="selectedItem.photos.length">
							<img
								v-for="(photo, index) in selectedItem.photos"
								:key="index"
								class="carousel-img"
								:src="
									'https://supstep-serverpechenki-4819.twc1.net/photos/' + photo
								"
							/>
						</template>
						<template v-if="!selectedItem.photos.length">
							<img
								class="carousel-img"
								:src="'https://supstep-serverpechenki-4819.twc1.net/photos/default.jpg'"
							/>
						</template>
						<template #arrow="{ prev, next }">
							<div class="custom-arrow">
								<button type="button" class="custom-arrow--left" @click="prev">
									<component :is="arrow_back"></component>
								</button>
								<button type="button" class="custom-arrow--right" @click="next">
									<component :is="arrow_forward"></component>
								</button>
							</div>
						</template>
					</n-carousel>
					<div class="modal__info-wrapper">
						<p v-if="selectedItem.description">
							{{ selectedItem.description }}
						</p>
						<p v-else>{{ selectedItem.structure }}</p>

						<p v-if="selectedItem.composition">
							Состав: {{ selectedItem.composition }}
						</p>
						<p>Цена: {{ selectedItem.price }}</p>
					</div>
				</div>
			</n-infinite-scroll>
		</template>
	</n-modal>

	<n-modal
		v-model:show="showModalBox"
		class="custom-card"
		preset="card"
		:style="bodyStyle"
		:title="selectedBox.name"
		:bordered="false"
		size="small"
	>
		<template v-if="selectedBox">
			<n-infinite-scroll style="max-height: 80vh" :distance="10">
				<div class="modal__container">
					<n-carousel
						:show-dots="false"
						show-arrow
						class="carousel"
						:space-between="8"
					>
						<template v-if="selectedBox.photos.length || selectedBox.structure">
							<div class="carousel-slide">
								<img
									v-if="selectedBox.photos.length"
									class="carouselBox-img"
									:src="
										'https://supstep-serverpechenki-4819.twc1.net/photos/' +
										selectedBox.photos[0]
									"
								/>
								<p
									v-if="selectedBox.structure"
									class="carousel-description box"
								>
									{{ selectedBox.structure }}
								</p>
							</div>
						</template>

						<template v-if="selectedBox.items.length">
							<template v-for="(item, index) in selectedBox.items" :key="index">
								<div class="carousel-slide">
									<img
										v-if="item.photos.length"
										class="carouselBox-img"
										:src="
											'https://supstep-serverpechenki-4819.twc1.net/photos/' +
											item.photos[0]
										"
									/>
									<p v-if="item.description" class="carousel-description box">
										{{ item.description }}
									</p>
								</div>
							</template>
						</template>
						<template #arrow="{ prev, next }">
							<div class="custom-arrow_box">
								<button type="button" class="custom-arrow--left" @click="prev">
									<component :is="arrow_back"></component>
								</button>
								<button type="button" class="custom-arrow--right" @click="next">
									<component :is="arrow_forward"></component>
								</button>
							</div>
						</template>
					</n-carousel>
					<div class="modal__info-wrapper">
						<p>Цена: {{ selectedBox.price }}</p>
					</div>
				</div>
			</n-infinite-scroll>
		</template>
	</n-modal>
</template>

<script setup>
import Button from '@/components/Button.vue'
import { useStore } from '@/stores/store'
import { computed, defineProps, ref } from 'vue'
import arrow_back from './icons/arrow_back.vue'
import arrow_forward from './icons/arrow_forward.vue'
const props = defineProps({
	data: Array,
})

const showModal = ref(false)
const showModalBox = ref(false)

const selectedItem = ref([])
const selectedBox = ref([])
const openModal = item => {
	if (item.items && item.items.length) {
		// Это бокс
		selectedBox.value = item
		showModalBox.value = true
	} else {
		// Это обычный товар
		selectedItem.value = item
		showModal.value = true
	}
}
const store = useStore()

const addToCard = item => {
	store.addToCart(item)
}

const bodyStyle = computed(() => {
	const width = window.innerWidth
	let modalWidth = '30%'

	if (width < 1100) {
		modalWidth = '40%'
	}
	if (width < 900) {
		modalWidth = '50%'
	}
	if (width < 768) {
		modalWidth = '80%'
	}
	if (width < 425) {
		modalWidth = '95%'
	}

	return { width: modalWidth }
})
</script>

<style scoped>
.card__wrapper {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 24px;
	justify-items: start;
}

.card {
	width: 100%;
	max-width: 300px;
	background-color: #95b88e;
	border-radius: 20px;
	color: #fff;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	display: flex;
	flex-direction: column;
	height: 100%;
}

.card:hover {
	transform: translateY(-3px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card__img {
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 200px;
	border-radius: 20px 20px 0 0;
}

.card__text-wrapper {
	flex-grow: 1;
}

.card__pay-wrapper {
	padding: 6px 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card__pay-wrapper span {
	font-size: 22px;
	font-weight: bold;
}

.card__title {
	padding: 6px 12px;
	background-color: #668567;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}

.card__description {
	font-size: 20px;
	padding: 6px 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.carousel {
	width: 100%;
	height: 340px;
	min-width: 250px;
	max-height: 380px;
	min-height: 320px;
	aspect-ratio: 2/1;
}

.carousel-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.carouselBox-img {
	width: 100%;
	height: 260px;
	object-fit: cover;
}

.box {
	padding: 0 6px;
}

.modal__container {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.modal__info-wrapper {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 12px;
	height: 100%;
}

.modal__info-wrapper {
	font-size: 18px;
}

.modal__info-wrapper span {
	align-self: end;
	font-weight: bold;
}

.carousel-slide {
	display: flex;
	flex-direction: column;
	margin-left: 8px;
	gap: 12px;
}

.custom-arrow {
	display: flex;
	gap: 12px;
	position: absolute;
	bottom: 5px;
	right: 16px;
}

.custom-arrow_box {
	display: flex;
	gap: 12px;
	position: absolute;
	bottom: 85px;
	right: 16px;
}

.custom-arrow button {
	cursor: pointer;
}

@media (max-width: 1000px) {
	.card__description {
		font-size: 18px;
	}
	.card__pay-wrapper span {
		font-size: 20px;
	}
}

@media (max-width: 768px) {
	.card {
		margin: 0 auto;
	}
	.carousel {
		width: 100%;
		height: 300px;
	}

	.modal__container {
		flex-direction: column;
	}
	.card__description {
		font-size: 16px;
	}
	.card__pay-wrapper span {
		font-size: 18px;
	}
}

@media (max-width: 425px) {
	.carousel {
		width: 100%;
	}
	.card__description {
		font-size: 14px;
	}
	.card__pay-wrapper span {
		font-size: 16px;
	}
}

@media (max-width: 375px) {
	.card__description {
		font-size: 12px;
	}
	.card__pay-wrapper span {
		font-size: 14px;
	}
}
</style>
