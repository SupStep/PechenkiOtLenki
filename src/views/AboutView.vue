<template>
	<div class="page__container">
		<h1 class="page__title">ОБО МНЕ</h1>
		<div class="page__large">
			<img
				class="page__img"
				src="/owner.jpg"
				alt="Основатель и главный шеф повар."
			/>
			<div class="page__text-wrapper">
				<p class="page__text">
					Привет! Меня зовут Лена, и я пеку уникальные печенья и хлеб у себя
					дома. Каждый день я стараюсь печь что-то новое и интересное,
					экспериментируя с ингредиентами и вкусами. Мои печенья и хлеб всегда
					получаются очень вкусными и ароматными, благодаря натуральным
					продуктам и отсутствию вредных добавок.
				</p>

				<blockquote class="quote__wrapper">
					<span>Цитата:</span><br />
					<i>“Я не волшебник, но я научу...”</i>
				</blockquote>
			</div>
			<p class="page__text">
				Мне нравится использовать сезонные фрукты и овощи, чтобы создавать новые
				рецепты и радовать своих близких. Я также люблю делиться своим
				мастерством с другими, поэтому иногда провожу мастер-классы по выпечке
				для взрослых и детей. Однако, несмотря на то что я люблю печь, моя
				главная цель - не только угодить своим вкусам, но и сделать людей
				счастливыми. Ведь каждый раз, когда я пеку что-то вкусное и ароматное, я
				знаю, что это принесет радость и улыбки на лица моих близких и друзей.
			</p>
		</div>

		<div class="page__small">
			<p class="page__text">
				Привет! Меня зовут Лена, и я пеку уникальные печенья и хлеб у себя дома.
				Каждый день я стараюсь печь что-то новое и интересное, экспериментируя с
				ингредиентами и вкусами. Мои печенья и хлеб всегда получаются очень
				вкусными и ароматными, благодаря натуральным продуктам и отсутствию
				вредных добавок.
			</p>
			<img
				class="page__img"
				src="/owner.jpg"
				alt="Основатель и главный шеф повар."
			/>

			<div class="quote__wrapper">
				<span>Цитата:</span><br />
				<i>“Я не волшебник, но я научу...”</i>
			</div>

			<p class="page__text">
				Мне нравится использовать сезонные фрукты и овощи, чтобы создавать новые
				рецепты и радовать своих близких. Я также люблю делиться своим
				мастерством с другими, поэтому иногда провожу мастер-классы по выпечке
				для взрослых и детей. Однако, несмотря на то что я люблю печь, моя
				главная цель - не только угодить своим вкусам, но и сделать людей
				счастливыми. Ведь каждый раз, когда я пеку что-то вкусное и ароматное, я
				знаю, что это принесет радость и улыбки на лица моих близких и друзей.
			</p>
		</div>
	</div>
</template>

<script setup></script>

<style>
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

.page__img {
	width: 300px;
	float: right;
	margin-left: 12px;
	border-radius: 10px;
}

.page__text {
	font-size: 26px;
	line-height: 2.7rem;
}

.page__text::first-letter {
	font-size: 48px;
	font-weight: bold;
}

.page__text-wrapper {
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 220px;
	gap: 48px;
}

.quote__wrapper {
	justify-self: end;
}

.quote__wrapper span {
	color: #00000091;
	font-size: 18px;
}

.quote__wrapper i {
	font-size: 20px;
}

.page__large {
	display: block;
}

.page__small {
	display: none;
}

@media (max-width: 1000px) {
	.page__title {
		margin-bottom: 12px;
	}

	.page__img {
		width: 260px;
	}

	.page__text {
		font-size: 22px;
		line-height: 2.4rem;
	}

	.page__text::first-letter {
		font-size: 32px;
	}

	.page__text-wrapper {
		gap: 24px;
	}

	.quote__wrapper span {
		font-size: 18px;
	}

	.quote__wrapper i {
		font-size: 20px;
	}
}

@media (max-width: 768px) {
	.page__large {
		display: none;
	}

	.page__small {
		display: block;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.page__title {
		font-size: 22px;
		margin-bottom: 6px;
	}

	.page__img {
		float: none;
		align-self: center;
		width: 200px;
	}

	.page__text {
		font-size: 18px;
		line-height: 2.1rem;
	}

	.page__text::first-letter {
		font-size: 24px;
	}

	.quote__wrapper span {
		font-size: 14px;
	}

	.quote__wrapper i {
		font-size: 16px;
	}
}
</style>
